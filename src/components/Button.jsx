const Button = ({text, func}) => {
  return (
    <button onClick={func}>{text}</button>
  )
}

Button.defaultProps = {
  text: "Submit",
  func: () => console.log('Submit'),
}

export default Button;