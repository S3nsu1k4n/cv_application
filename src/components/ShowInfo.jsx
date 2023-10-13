
const ShowInfo = ({ information, state}) => {
  return (
    <div>
      { information && information.map( info => {return <p key={info}>{info}: { state ? state[info] : '???'}</p> }) }
    </div>
  )
}
export default ShowInfo;