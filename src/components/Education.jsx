import Form from "./Form";
import Button from "./Button";
import ShowInfo from "./ShowInfo";
import { useState } from "react";

const Education = () => {
  // school name, title of study, date of study
  const [state, setState] = useState({open: false, School: '', Major: '', Startdate: '', Enddate: ''})
  const information = ['School', 'Major', 'Startdate', 'Enddate'];

  const toggle_state = () => {
    const newState = { ...state, open: !state.open };
    setState(newState);
  }
  return (
    <>
      <h1>Education</h1>
      {state.open ? <Form information={information} setState={setState} state={state} /> : <ShowInfo information={information} state={state}/>}
      <Button text={state.open ? "Submit" : "Edit"} func={toggle_state}/>
  
    </>
  )
}
export default Education;