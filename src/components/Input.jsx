const Input = ({ name, setState, state }) => {
  const update_value = (e) => {
    const newState = {...state, [e.target.name]: e.target.value}
    setState(newState);
  }
  return (
    <>
      <label htmlFor={name} name={name}>{name}: </label>
      <input type="text" name={name} onInput={update_value} value={state[name]}/>
    </>
  )
}

export default Input;