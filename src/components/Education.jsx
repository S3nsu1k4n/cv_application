import Form from "./Form";
import Button from "./Button";
import ShowInfo from "./ShowInfo";
import { useState } from "react";
import { LocalStorage } from "./localstorage";

const Education = () => {
  // school name, title of study, date of study
  const storage = new LocalStorage();
  const data = storage.get_section('education');

  const [state, setState] = useState(data ? {open: data.open, School: data.School, Major: data.Major, Startdate: data.Startdate, Enddate: data.Enddate} : {open: false, School: '', Major: '', Startdate: '', Enddate: ''})
  const information = ['School', 'Major', 'Startdate', 'Enddate'];

  const toggle_state = () => {
    const newState = { ...state, open: !state.open };
    storage.save_section('education', newState)
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