import React from "react";
import styled from "styled-components";
import SkillCard from "./SkillCard";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
  .transition-enter {
    opacity: 0.01;
    transform: translate(0, -10px);
  }
  .transition-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 300ms ease-in;
  }
  .transition-exit {
    opacity: 1;
    transform: translate(0, 0);
  }
  .transition-exit-active {
    opacity: 0.01;
    transform: translate(0, 10px);
    transition: all 300ms ease-in;
  }
`;

const SkillGroup = props => {
  return (
    
    <TransitionGroup component={StyledGrid}>
      {props.items.map(item => (
        <CSSTransition key={item.id} timeout={300} classNames="transition">
          <SkillCard
            {...item}
            removeItem={() => {
              props.removeItem(item.id);
            }}
          ></SkillCard>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default SkillGroup;