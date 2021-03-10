import React, { useState } from "react";
import "./App.scss";
import TaskList from "./components/taskList/TaskList";
import { useSelector } from "react-redux";
import TaskForm from "components/task/taskForm/TaskForm";
import { data } from "./data/data";
import { TaskDto } from "interfaces/TaskInterface";

const App: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [currentValues, setCurrentValues] = useState<TaskDto>();
  const { lists, tasks } = useSelector((state) => state.taskType);

  return (
    <div className="App">
      <button onClick={() => setShowForm(true)} className="Create">
        Create task
      </button>
      <div className="Tasks">
        {lists.map((list) => (
          <TaskList
            key={list.id}
            setCurrentValues={setCurrentValues}
            setShowForm={setShowForm}
            title={list.status}
            tasks={tasks.filter((task) => task.status === list.status)}
          />
        ))}
      </div>
      {showForm && (
        <TaskForm
          data={data}
          currentValues={currentValues}
          setCurrentValues={setCurrentValues}
          setShowForm={setShowForm}
        />
      )}
    </div>
  );
};

export default App;
