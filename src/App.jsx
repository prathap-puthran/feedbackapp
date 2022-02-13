import { useState } from "react"
import Feedbackitem from "./components/Feedbackitem"
import FeedbackStats from "./components/FeedbackStats"
import Header from "./components/Header"

import FeedbackData from "./data/feed"




function App() {
  const [Feedbackdata, setFeedbackdata] = useState(FeedbackData)

let handleDelete =(d)=>{
    if (window.confirm('are you sure you want to delete')){
setFeedbackdata(Feedbackdata.filter((i)=> i.id !== d ))
  }}

  if (Feedbackdata.length !==0){
 
  return <>

<Header name='Feedback UI' bgColor="rgba(0,0,0,0.4)" textColor="#ff6a95" />
<FeedbackStats Feedbackdata={Feedbackdata} />
<div className="container">
  {Feedbackdata.map((a)=>{return (<Feedbackitem text={a.text} rating = {a.rating} id={a.id} handleDelete={(d)=>handleDelete(d)} />)})} 
</div>

  </>
  }else{
    return(<>
      <Header name='Feedback UI' bgColor="rgba(0,0,0,0.4)" textColor="#ff6a95" />
    <div className="card flex justify-center reverse">
      Nothing to show here
    </div></>)
  }
  
}
export default App