import {useState} from 'react'

function SearchHeader({search}) {
    const [valueInput, setValueInput] = useState('')
    const formSubmit = (event)=>{
        event.preventDefault();
        search(valueInput)
    }
    const handleChange = (event) => {
        setValueInput(event.target.value)
    }
    return ( 
        <div className="searchHeader">
            <form onSubmit={formSubmit}>
                <input value={valueInput} onChange={handleChange} type="text" placeholder="What are you looking for?" />
            </form>
        </div>
     );
}

export default SearchHeader;