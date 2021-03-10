import React from "react";
import "./Task.scss";

interface Props {
  title: string;
  description: string;
  person: string;
}
const Task: React.FC<Props> = ({ title, description, person }) => {
  return (
    <div className="Task">
      <h5>title: {title}</h5>
      <h6>desc: {description}</h6>
      <h6>assigned to: {person}</h6>
    </div>
  );
};

export default Task;
