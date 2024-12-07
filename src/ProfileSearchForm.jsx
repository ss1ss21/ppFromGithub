import { useState } from "react";

export default function ProfileSerachForm({search}){
    const [term, setTerm] = useState("");

    function handleChange(evt){
        setTerm(evt.target.value);
    }

    function handleSubmit(evt){
        evt.preventDefault();
        search(term);
        setTerm("");
    }
    return(
        <form onSubmit={handleSubmit}>
            <input placeholder="user-name" value={term} onChange={handleChange} />
            <button style={{marginLeft:'10px'}}>Search!!</button>
        </form>
    )
}