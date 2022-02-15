import { useState } from "react"

function Ratingselector({selectedNum}) {
    
    let [selected,setselected] = useState(1)

function handleclick(e){
    setselected(+e.currentTarget.value)
    selectedNum(+e.currentTarget.value)
    //new way to paserInt() +e.currentTarget.value)

}

  return (
    <ul className="rating">
        <li>
            <input type="radio" id="num1" value= '1' onChange={handleclick}  checked={selected === 1}/>
            <label htmlFor="num1">1</label>
            
        </li>
        <li>
            <input type="radio" id="num2" value= '2' onChange={handleclick}  checked={selected === 2}/>
            <label htmlFor="num2">2</label>
            
        </li>
        <li>
            <input type="radio" id="num3" value= '3' onChange={handleclick}  checked={selected === 3}/>
            <label htmlFor="num3">3</label>
            
        </li>
        <li>
            <input type="radio" id="num4" value= '4' onChange={handleclick}  checked={selected === 4}/>
            <label htmlFor="num4">4</label>
            
        </li>
        <li>
            <input type="radio" id="num5" value= '5' onChange={handleclick}  checked={selected === 5}/>
            <label htmlFor="num5">5</label>
            
        </li>
        <li>
            <input type="radio" id="num6" value= '6' onChange={handleclick}  checked={selected === 6}/>
            <label htmlFor="num6">6</label>
            
        </li>
        <li>
            <input type="radio" id="num7" value= '7' onChange={handleclick}  checked={selected === 7}/>
            <label htmlFor="num7">7</label>
            
        </li>
        <li>
            <input type="radio" id="num8" value ='8' onChange={handleclick}  checked={selected === 8}/>
            <label htmlFor="num8">8</label>
            
        </li>
        <li>
            <input type="radio" id="num9" value= '9' onChange={handleclick}  checked={selected === 9}/>
            <label htmlFor="num9">9</label>
            
        </li>
        <li>
            <input type="radio" id="num10" value= '10' onChange={handleclick}  checked={selected === 10}/>
            <label htmlFor="num10">10</label>
            
        </li>
    </ul>
  )
}
export default Ratingselector