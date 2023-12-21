import styled from "styled-components";

const RollDice = ({ currentDice, roleDice }) => {
  return (
    <DiceContainer>
      <div className="dice">
        <img
          src={`./images/dice-${currentDice}.jpg`}
          alt={`dice ${currentDice}`}
          width={160}
          onClick={roleDice}
        />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};
export default RollDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 24px;
  }
  .dice {
    cursor: pointer;
  }
`;
