import React, { useRef } from "react";
import "./TaskForm.scss";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "../../../actions";
import * as Yup from "yup";
import { TaskDto } from "interfaces/TaskInterface";

interface Props {
  data: any;
  setShowForm: (arg: boolean) => void;
  currentValues?: TaskDto;
  setCurrentValues: (TaskDto) => void;
}

const TaskForm: React.FC<Props> = ({
  data,
  setShowForm,
  currentValues,
  setCurrentValues,
}) => {
  const formWrapperRef = useRef(null);
  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    description: Yup.string().required(),
    person: Yup.string().required(),
    status: Yup.string().required(),
  });
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: currentValues ? currentValues.title : "",
      description: currentValues ? currentValues.description : "",
      person: currentValues ? currentValues.person : "",
      status: currentValues ? currentValues.status : "",
    },
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      dispatch(
        currentValues
          ? editTask({ ...currentValues, ...values })
          : addTask(values)
      );
      setShowForm(false);
      setCurrentValues(null);
    },
  });

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        formWrapperRef.current &&
        !formWrapperRef.current.contains(event.target)
      ) {
        setShowForm(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    //eslint-disable-next-line
  }, [formWrapperRef]);

  return (
    <div ref={formWrapperRef} className="TaskForm">
      <div className="Form">
        <h5>{currentValues ? "Edit task" : "Create task"}</h5>
        <div className="Divider" />
        <form className="FormContent" onSubmit={formik.handleSubmit}>
          {Object.keys(formik.errors).length > 0 && (
            <div className="Error">You must fill out entire form!</div>
          )}
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />

          <label htmlFor="person">Assign To :</label>
          <select
            name="person"
            value={formik.values.person}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">--Select person--</option>
            {data.persons.map((person, index) => (
              <option key={index} value={person.value}>
                {person}
              </option>
            ))}
          </select>
          <label htmlFor="status">Status :</label>
          <select
            name="status"
            value={formik.values.status}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">--Select status--</option>
            {data.status.map((status, index) => (
              <option key={index} value={status.value}>
                {status}
              </option>
            ))}
          </select>

          <button className="Save" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
function useEffect(arg0: () => () => void, arg1: any[]) {
  throw new Error("Function not implemented.");
}
