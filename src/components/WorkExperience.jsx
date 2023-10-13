import { useState } from "react";
import ShowInfo from "./ShowInfo";
import Button from "./Button";
import Form from "./Form";
import { LocalStorage } from "./localstorage";

const WorkExperience = () => {
  // company name, position, main responsibilities, date from until
  const storage = new LocalStorage();
  const data = storage.get_section('workexperience');

  const [state, setState] = useState(data ? {open: data.open, Company: data.Company, Position: data.Position, Responsibilities: data.Responsibilities, Startingdate: data.Startingdate, Enddate: data.Enddate} : {open: false, Company: '', Position: '', Responsibilities: '', Startingdate: '', Enddate: ''})
  const information = ['Company', 'Position', 'Responsibilities', 'Startingdate', 'Enddate'];

  const toggle_state = () => {
    const newState = { ...state, open: !state.open };
    storage.save_section('workexperience', newState)
    setState(newState);
  }
  return (
    <>
      <h1>Work Experience</h1>
      {state.open ? <Form information={information} setState={setState} state={state} /> : <ShowInfo information={information} state={state}/>}
      <Button text={state.open ? "Submit" : "Edit"} func={toggle_state}/>
    </>
  )
}
export default WorkExperience;