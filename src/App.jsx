import { useState } from "react"
import FeedbackForm from "./components/FeedbackForm"
import Feedbackitem from "./components/Feedbackitem"
import FeedbackStats from "./components/FeedbackStats"
import Header from "./components/Header"
import FeedbackData from "./data/feed"
import {BrowserRouter as Router , Link, Route ,Routes} from 'react-router-dom'
import Aboutpage from "./pages/Aboutpage"




function App() {

  function handleadd(e){
    e.id =Math.random(5)
   setFeedbackdata([e,...Feedbackdata])

   // setFeedbackdata(Feedbackdata.push(e))

  }



  const [Feedbackdata, setFeedbackdata] = useState(FeedbackData)

let handleDelete =(d)=>{
    if (window.confirm('are you sure you want to delete')){
setFeedbackdata(Feedbackdata.filter((i)=> i.id !== d ))
  }}

  
 
  return <>
<Router>
  <Routes>


    <Route path='/' element={<><Header name='Feedback UI' bgColor="rgba(0,0,0,0.4)" textColor="#ff6a95" />
<FeedbackForm handleadd={handleadd} />
<FeedbackStats Feedbackdata={Feedbackdata} />
<Conditioned /></>} />

<Route path="/about" element={<Aboutpage/>} />


</Routes>
</Router>


  </>
 


  function Conditioned(){
    if (Feedbackdata.length ===0){
      return (
        
        <div className="card flex justify-center reverse">
      Nothing to show here
    </div>
  
    )

    }else{
      return (

       
        <div className="container">
  {Feedbackdata.map((a)=>{return (<Feedbackitem text={a.text} rating = {a.rating} id={a.id} handleDelete={(d)=>handleDelete(d)} key={a.id} />)})} 

<Link to='/about'>
<h1>About</h1>

</Link>
</div>




)

      
    }
  }
  
}
export default App