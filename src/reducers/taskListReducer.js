import { actionTypes } from "actions";

const initialState = {
  lists: [
    {
      id: 1,
      status: "To Do",
    },
    {
      id: 2,
      status: "In Progress",
    },
    {
      id: 3,
      status: "Done",
    },
  ],
  tasks: [],
};

const taskListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TASK: {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    }

    case actionTypes.EDIT_TASK: {
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    }

    default:
      return state;
  }
};

export default taskListReducer;
