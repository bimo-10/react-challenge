import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        {skills.map((skill) => {
          return (
            <SkillList
              skill={skill.skill}
              level={skill.level}
              color={skill.color}
            />
          );
        })}
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img src="untitled-1.jpg" alt="" className="avatar" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Bimo</h1>
      <p>
        Full-stack web developer. When not coding I like to play board games.
      </p>
    </div>
  );
}

function SkillList({ skill, color, level }) {
  return (
    <div className="skill-list" style={{ backgroundColor: `${color}` }}>
      <div className="skill">
        <p className="">{skill}</p>
        <span>
          {level === "beginner" && "👶"}
          {level === "intermediate" && "👍"}
          {level === "advanced" && "💪"}
        </span>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
