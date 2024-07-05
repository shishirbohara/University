import React from "react";
import "./Programs.css";
import program_1 from "../../assets/program1.jpg";
import program_2 from "../../assets/program-2.jpg";
import program_3 from "../../assets/program-3.jpg";
import graduate from "../../assets/graduate.svg";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={graduate} alt="" />
          <p>Computer Science</p>
        </div>
      </div>

      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={graduate} alt="" />

          <p>Information Technology & Management</p>
        </div>
      </div>

      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={graduate} alt="" />

          <p>Digital Media and Design</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
