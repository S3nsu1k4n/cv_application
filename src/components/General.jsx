import Form from "./Form";
import Button from "./Button";
import ShowInfo from "./ShowInfo";
import { useState } from "react";

const General = () => {
  // name, email, phone
  const [state, setState] = useState({open: false, Name: '', Email: '', Phone: ''});
  const information = ['Name', 'Email', 'Phone'];
  // edit + submit button
  const toggle_state = () => {
    const newState = {...state, open: !state.open};
    setState(newState);
  }
  return (
  <>
    <h1>General Information</h1>
    {state.open ? <Form information={information} setState={setState} state={state} /> : <ShowInfo information={information} state={state}/>}
    <Button text={state.open ? "Submit" : "Edit"} func={toggle_state}/>
  </>
  )
}
export default General;