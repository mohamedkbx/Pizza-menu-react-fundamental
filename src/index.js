import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar photo="pizzas/profile-pic.png" />
      <div className="data">
        <Intro name="Mohamed" title="Front End Developer" />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <div className="avatar">
      <img className="avatar" src={props.photo} />
    </div>
  );
}

function Intro(props) {
  return (
    <div className="data">
      <h1>{props.name}</h1>
      <p>{props.title}</p>
    </div>
  );
}

function SkillList(props) {
  return (
    <div className="skill-list ">
      <Skill skill="html" background="red" />
      <Skill skill="css" background="blue" />
      <Skill skill="JavaScript" background="orange" />
      <Skill skill="React" background="white" />
      <Skill skill="Redux" background="red" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill">
      <p style={{ backgroundColor: props.background }}>{props.skill}</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
