import { useState,useEffect } from "react";
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcher(){
    const [quote, setQuote] = useState("");

    useEffect(()=>{
        console.log("useEffect called")
        fetchQuote();
    },[]
    )
    async function fetchQuote(){
        const response = await fetch(RANDOM_QUOTE_URL);
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse.quote;
        setQuote(randomQuote);
    }

    return(
        <>
        <button onClick={fetchQuote}>button</button>
        <h2>{quote.text}</h2>
        <h4>{quote.author}</h4>
        </>
    )
}