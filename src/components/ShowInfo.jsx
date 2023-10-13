
const ShowInfo = ({ information, general}) => {
  return (
    <div>
      { information && information.map( info => {return <p key={info}>{info}: { general ? general[info] : '???'}</p> }) }
    </div>
  )
}
export default ShowInfo;