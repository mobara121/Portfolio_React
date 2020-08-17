import React, { useState } from "react";
import styled from "styled-components";
import {Grid} from '@material-ui/core';
import SkillGroup from "./SkillGroup";
import AddButton from './AddButton';
import Ramen from '../../assets/ramenApp.png';
import Blog from '../../assets/blog.png';
import Portfolio from '../../assets/portfolio.png';
import StaticLayout from '../../assets/StaticLayout.png';

const Container = styled.div`
  display: grid;
  max-width: calc(100% - 10px);
  margin: 0px auto 90px;
  @media (max-width: 768px) {
    max-width: calc(100% - 32px);
  }
`;

const StyledH1 = styled.h1`
  color: #fafafa;
  border-color: #292929;
  line-height: 0.75em;
  font-size: 40px;
  font-weight: 900;
  font-family: "Work Sans", -apple-system, ".SFNSText-Regular", "San Francisco",
    "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif !important;
  text-transform: uppercase;
  line-height: 0.7em;
  padding: 0px 8px;
  margin: 0 auto;
  max-width: 1000px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

function Skills() {
  // make below based on routes
  const [items, setItems] = useState([]);

  const addItem = () => {

    setItems([
      ...items,
      {
        id: 0,
        title: "PERN-STACK-PROJECT",
        skill: "React.js  Node.js  Express.js PostgresSQL Bootstrap Heroku PostgreSQL",
        img: Ramen,
        // link: "https://ramen-restaurant-list.herokuapp.com/"
      },
      {
        id: 1,
        title: "PORTFOLIO",
        skill: "Material-UI styled-components",
        img: Portfolio,
      },
      {
        id: 2,
        title: "PERSONAL BLOG",
        skill: "Postman API Back-End-Web Development Trello Express.js Ant Design",
        img: Blog,
      },
      {
        id: 3,
        title: "STATIC LAYOUT",
        skill: "HTML5, CSS#",
        img: StaticLayout,
      },
      {
        id: 4,
        title: "Blue Badge-TBA",
        skill: " ",
        img: " # ",
      },
      {
        id: 5,
        title: "Red Badge-TBA",
        skill: " ",
        img: " # ",
      },
    ]);
  };

  const removeItem = id => {
    console.log("here is the " + id);
    // remove the clicked route from the array using an array filter
    // pass in each item via the filter and check if it doesn't equal
    // the id of the clicked item
    const newItems = [...items].filter(item => {
      
      return item.id !== id;
    });

    setItems(newItems);
  };

  return (
    <Grid>
    <Container>
      <StyledH1><AddButton className="addButton" label={"SKILL "} addItem={addItem}></AddButton></StyledH1>
      {/* <StyledSpan>*To see Skill, click as many times as you like!</StyledSpan> */}
      <SkillGroup items={items} removeItem={removeItem}></SkillGroup>
    </Container>
    </Grid>
  );
};


export default Skills;