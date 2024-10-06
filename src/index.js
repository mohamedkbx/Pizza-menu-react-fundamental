import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";

const skills = [
  { id: 1, skill: "HTML", level: "Advanced", color: "#E34C26" },
  { id: 2, skill: "CSS", level: "Intermediate", color: "#264de4" },
  { id: 3, skill: "JavaScript", level: "Advanced", color: "#F0DB4F" },
  { id: 4, skill: "React", level: "Intermediate", color: "#61DBFB" },
  { id: 5, skill: "Node.js", level: "Beginner", color: "#68A063" },
];

function App() {
  return (
    <div className="card">
      <Avatar photo="pizzas/profile-pic.png" alt="profile" />
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
      <img className="avatar" src={props.photo} alt={props.alt} />
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

function SkillList() {
  return (
    <ul className="skill-list ">
      {skills.map((skillObj) => {
        return <Skill skillObj={skillObj} key={skillObj.id} />;
      })}
    </ul>
  );
}

function Skill({ skillObj, key }) {
  return (
    <li className="skill" style={{ backgroundColor: skillObj.color }} key={key}>
      <span>{skillObj.skill}</span>
      <span>
        {skillObj.level === "Advanced" && "💪"}
        {skillObj.level === "Intermediate" && "👍"}
        {skillObj.level === "Beginner" && "👶"}
      </span>
    </li>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
