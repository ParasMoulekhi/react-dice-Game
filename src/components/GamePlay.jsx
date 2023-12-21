import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import { useState } from "react";
import Button, { OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [currentScore, setCurrentScore] = useState(0);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const rulesButtonClick = () => {
    setShowRules((prev) => !prev);
  };

  const resetScore = () => {
    setCurrentScore(0);
  };

  const generateDiceNumber = () => {
    return Math.trunc(Math.random() * 6) + 1;
  };

  const roleDice = () => {
    // Guard Clause -> If number has not clicked, then we return from function
    if (!selectedNumber) {
      setError("You have not selected any number!");
      return;
    }

    const randomNumber = generateDiceNumber();
    setCurrentDice(randomNumber);

    if (selectedNumber === generateDiceNumber) {
      setCurrentScore((prev) => prev + currentScore);
    } else {
      setCurrentScore((prev) => prev - 2);
    }
    setSelectedNumber("");
  };
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore currentScore={currentScore} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice} />

      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={rulesButtonClick}>
          {showRules ? "Hide " : "Show "}
          Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
    padding-top: 30px;
  }
  .btns {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
