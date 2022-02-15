function Header(props) {
  return (
    <header style={{backgroundColor:props.bgColor,color:props.textColor}}>
     <div className="container  ">

<h2 className="text-4xl">{props.name}</h2>


     </div>
      </header>
  )
}

Header.defaultProps ={
  name :'name shoud be here',
  
}

export default Header