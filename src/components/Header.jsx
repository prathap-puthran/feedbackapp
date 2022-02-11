function Header(props) {
  return (
    <div className="flex justify-center bg-gray-500 py-5">
      <h1 className="text-4xl text-gray-200 "> 
      
      {props.name  }
      
      </h1>
      </div>
  )
}

Header.defaultProps ={
  name :'name shoud be here',
  
}

export default Header