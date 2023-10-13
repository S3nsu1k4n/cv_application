import Form from "./Form";
import Button from "./Button";
import ShowInfo from "./ShowInfo";
import { useState } from "react";
import { LocalStorage } from "./localstorage";

const General = () => {
  // name, email, phone
  const storage = new LocalStorage();
  const data = storage.get_section('general');

  const [state, setState] = useState(data ? {open: data.open, Name: data.Name, Email: data.Email, Phone: data.Phone} : {open: false, Name: '', Email: '', Phone: ''});
  const information = ['Name', 'Email', 'Phone'];
  // edit + submit button
  const toggle_state = () => {
    const newState = {...state, open: !state.open};
    storage.save_section('general', newState)
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