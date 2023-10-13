const Input = ({ name, setGeneral, general }) => {
  const update_value = (e) => {
    const newGeneral = {...general, [e.target.name]: e.target.value}
    setGeneral(newGeneral);
  }
  return (
    <>
      <label htmlFor={name} name={name}>{name}: </label>
      <input type="text" name={name} onInput={update_value} value={general[name]}/>
    </>
  )
}

export default Input;