import Input from "./Input"

const Form = ({information, setGeneral, general}) => {
  return (
  <div>
      <form onSubmit={e => e.preventDefault()}>
        { information.map( info => {
            return <Input key={info} name={info} setGeneral={setGeneral} general={general} />
        })}
        </form>
    </div>
  )
}
export default Form;