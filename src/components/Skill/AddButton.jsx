import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  /* border-radius: 12px; */
  background-color: transparent;
  color: #fafafa;
  font-family: "Work Sans", -apple-system, ".SFNSText-Regular", "San Francisco",
    "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif !important;
  padding: 14px 15px;
  line-height: 0.75em;
  /* height: 4rem;
  width: 220px; */
  /* margin: 2rem 0 2rem; */
  text-align: center;
  border: none;
  outline: none;
  font-size: 30px;
  font-weight: 900;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-font-variant-ligatures: contextual;
  font-variant-ligatures: contextual;
  -webkit-font-feature-settings: "calt" 1;
  font-feature-settings: "calt" 1;
  transition: all 0.1s ease-out;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 20px;
  }
  &:hover {
    color: #fafafa;
    background-color: #9bcfde;
    -webkit-transform: scale(1.025);
    transform: scale(1.025);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

`;

const AddButton = props => {
  return <StyledButton onClick={props.addItem}>{props.label}</StyledButton>;
};

export default AddButton;