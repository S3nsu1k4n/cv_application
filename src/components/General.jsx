import Form from "./Form";
import Button from "./Button";
import ShowInfo from "./ShowInfo";
import { useState } from "react";

const General = () => {
  // name, email, phone
  const [general, setGeneral] = useState({open: false, Name: '', Email: '', Phone: ''});
  const information = ['Name', 'Email', 'Phone'];
  // edit + submit button
  const toggle_state = () => {
    const newGeneral = {...general, open: !general.open};
    setGeneral(newGeneral);
  }
  return (
  <>
    <h1>General Information</h1>
    {general.open ? <Form information={information} setGeneral={setGeneral} general={general} /> : <ShowInfo information={information} general={general}/>}
    <Button text={general.open ? "Submit" : "Edit"} func={toggle_state}/>
  </>
  )
}
export default General;