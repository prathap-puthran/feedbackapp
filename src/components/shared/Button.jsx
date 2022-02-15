function Button({children ,clas, type, Disabled}) {
  return (
    <button disabled={Disabled}  type ={type} className={`btn ${Disabled?'btn-desabled':'btn-primary'} text-lg`}>children</button>
  )
}
export default Button