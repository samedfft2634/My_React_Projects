import Identification from "./Identification";
import Validation from "./Validation";
import { useState } from "react";

const Forms = () =>{
    const [data,setData] = useState([])
    return (
        <div>
            <div className="validationPage">
            <Validation data={data} setData={setData}/>
            </div>
            <div className=" ids" >
                {data.map((product,index)=>(
                    <Identification {...product} key={index}/>
                ))}
            </div>
        </div>
    )
}
export default Forms;