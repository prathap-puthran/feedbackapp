import { useState } from "react"
import Ratingselector from "./Ratingselector";
import Button from "./shared/Button";
import Card from "./shared/Card"



function FeedbackForm({handleadd}) {
  let [value,setvalue] = useState('')

function selectedNum(a){
  setRating(a)

}
//handle submit
function handlesubmit(e){
  e.preventDefault()
  let newfeedback ={
    text,
    rating

  }
handleadd(newfeedback)
setText('')
}


    let [text ,setText]= useState('')
    let [disabled ,setdisabled]= useState(true)
    let [message ,setmessage]= useState('')
    let [rating ,setRating]= useState(10)

    function check(a){
      if(a.target.value.length  >= 15){
        setdisabled(false)
        setmessage('')

    }else{
      setdisabled(true)
      setmessage('Please type more than 10 words')
    }


    }
    
  return (
    <>
    <Card >
        <form action="" onSubmit={handlesubmit}>
            <h1>how would you rate your service with us?</h1>
            <Ratingselector selectedNum={selectedNum} />

            <div className="input-group">
                <input type="text" value={text} placeholder="write a review" onChange={(a)=>{setText(a.target.value);check(a)}}/>
                 <Button clas='primary' Disabled={disabled} >send</Button>
            </div>
            {message && <div className="message">{message}</div>}
        </form>
    </Card>
    </>
  )
}
export default FeedbackForm