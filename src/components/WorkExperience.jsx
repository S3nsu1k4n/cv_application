import { useState } from "react";
import ShowInfo from "./ShowInfo";
import Button from "./Button";
import Form from "./Form";

const WorkExperience = () => {
  // company name, position, main responsibilities, date from until
  const [state, setState] = useState({open: false, Company: '', Position: '', Responsibilities: '', Startingdate: '', Enddate: ''})
  const information = ['Company', 'Position', 'Responsibilities', 'Startingdate', 'Enddate'];

  const toggle_state = () => {
    const newState = { ...state, open: !state.open };
    setState(newState);
  }
  return (
    <>
      <h1>Work Experience</h1>
      {state.open ? <Form information={information} setGeneral={setState} general={state} /> : <ShowInfo information={information} general={state}/>}
      <Button text={state.open ? "Submit" : "Edit"} func={toggle_state}/>
  
    </>
  )
}
export default WorkExperience;