import { actionTypes } from "./index";

export const addTask = (task) => {
  return {
    type: actionTypes.ADD_TASK,
    payload: {
      title: task.title,
      description: task.description,
      person: task.person,
      status: task.status,
      id: (Math.random() + 1).toString(36).substring(7),
    },
  };
};

export const editTask = (task) => {
  return {
    type: actionTypes.EDIT_TASK,
    payload: task,
  };
};
