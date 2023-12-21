import styled from "styled-components";
import Button from "../styled/Button";

const StartGame = ({ toggleGamePlay }) => {
  return (
    <Container>
      <div>
        <img
          src="./images/dices.png"
          alt="dices-Image"
          style={{ width: "65%" }}
        />
      </div>

      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggleGamePlay}>Play Now</Button>
      </div>
    </Container>
  );
};
export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
