import Card from "./shared/Card"
import {FaTimes} from 'react-icons/fa'





function Feedbackitem({id ,text,rating,handleDelete}) {
  return (
    <Card reverse={true}> 
        <div className="num-display">{rating}</div>
        <div className="text-display">{text}</div>
        <div className="close" onClick={(r)=>{handleDelete(id)}}>
          <FaTimes color='purple'/>
        </div>
       
    </Card>
  )
}
export default Feedbackitem