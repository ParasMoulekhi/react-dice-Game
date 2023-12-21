import styled from "styled-components";

const TotalScore = ({ currentScore }) => {
  return (
    <ScoreContainer>
      <div>
        <h1>{currentScore}</h1>
        <p>Total Score</p>
      </div>
    </ScoreContainer>
  );
};
export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;
  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
