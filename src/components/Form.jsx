import Input from "./Input"

const Form = ({information, setState, state}) => {
  return (
  <div>
      <form onSubmit={e => e.preventDefault()}>
        { information.map( info => {
            return <Input key={info} name={info} setState={setState} state={state} />
        })}
        </form>
    </div>
  )
}
export default Form;