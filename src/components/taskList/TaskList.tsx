import React from "react";
import "./TaskList.scss";
import { TaskDto } from "interfaces/TaskInterface";
import Task from "components/task/Task";

interface Props {
  title: string;
  tasks: [];
  setShowForm: (arg: boolean) => void;
  setCurrentValues: (arg: TaskDto) => void;
}

const TaskList: React.FC<Props> = ({
  title,
  tasks,
  setShowForm,
  setCurrentValues,
}) => {
  const handleTaskClick = (task) => {
    setShowForm(true);
    setCurrentValues(task);
  };

  return (
    <div className="TaskList">
      <h3>{title}</h3>
      {tasks.map((task: TaskDto) => {
        return (
          <button key={task.id} onClick={() => handleTaskClick(task)}>
            <Task
              title={task.title}
              description={task.description}
              person={task.person}
            />
          </button>
        );
      })}
    </div>
  );
};

export default TaskList;
