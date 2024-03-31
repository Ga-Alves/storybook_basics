import { useState } from "react"
import './form.css'

export default function MyForm() {

    const [isError, setIsError] = useState<boolean>(false)
    
    const [data, setData] = useState<string>('')
    
    function onChangeData(event: React.ChangeEvent<HTMLInputElement>){
        setData(event.target.value);
        setIsError(false);
    }
    function handleSubmit() {
        console.log(data.length);
        
        if (data.length == 0) {
            setIsError(true); 
        }
    }
    
    return(
        <div>
            <label htmlFor="someImportantData">Some Required Data</label>
            <br/>
            <input
                data-testid="data-inpt"
                type="text"
                id="someImportantData"
                name="someImportantData"
                value={data}
                onChange={onChangeData}
                />
                {
                    isError ?
                        <label data-testid="error_tip" style={{color: 'red'}}> Please Insert Some Data</label> : <></>
                }
            <br/>
            <button data-testid="submit-btn" onClick={handleSubmit}>Submit</button>
        </div> 
    )   
} 