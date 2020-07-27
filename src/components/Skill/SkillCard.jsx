import React from "react";
import styled from "styled-components";

const ResizedImg = styled.img`
  width: 100%;
`;

const StyledCard = styled.div`

  margin: 20px;
  .card-wrapper {
    position: relative;
  }
  .card {
    display: grid;
    grid-template-rows: 30px;
    justify-items: start;
    align-items: start;
    width: 100%;
    min-width: 100%;
    min-height: 150px;
    padding: 20px;
    border-radius: 8px;
    background-image: linear-gradient(
      135deg,
      hsla(0, 00%, 100%, 0.6),
      hsla(0, 0%, 100%, 0.1)
    );
  }
  h4 {
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: Inter, sans-serif;
    color: #18171d;
    font-size: 18px;
    line-height: 1.2em;
    font-weight: 600;
    letter-spacing: -1px;
    text-transform: capitalize;
  }
  h5 {
    padding-top: 20px;
    color: #18171d;
    margin-top: 10px;
    margin-bottom: 5px;
    opacity: 0.4;
    font-family: Inter, sans-serif;
    color: #18171d;
    font-size: 12px;
    line-height: 18px;
    font-weight: 600;
    text-align: left;
  }
`;

const SkillCard = props => {
  return (
    <StyledCard
      key={props.id}
      className="card-wrapper"
      onClick={props.removeItem}
    >
      <div className="card">
        <h4>{props.title}</h4>
        <h5>{props.skill}</h5>
        <ResizedImg src={props.img} alt=""/>
        {/* <a href={props.link} alt="" /> */}
      </div>
    </StyledCard>
  );
};

export default SkillCard;