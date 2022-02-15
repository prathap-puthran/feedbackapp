import { Link } from "react-router-dom"
import Card from "../components/shared/Card"

function Aboutpage() {
  return (
    <Card>
        <div className="about">

            <h1>this is about page</h1>
            <Link to="/">back to home</Link>
            
        </div>
    </Card> )
} 
export default Aboutpage

