import { useState, useEffect } from "react";
const RANDOM_QUOTE_API = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcher() {
  const [quote, setQuote] = useState({ text: "", author: "" });

  useEffect(() => {
    // Fetch a random quote when the component mounts
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    const response = await fetch(RANDOM_QUOTE_API);
    const jsonResponse = await response.json();
    const randomQuote = jsonResponse.quote;
    setQuote(randomQuote);
  };

  return (
    <div>
      <button onClick={fetchQuote}>Get Quote Using handler</button>
      <h1>{quote.text}</h1>
      <h3>{quote.author}</h3>
    </div>
  );
}
