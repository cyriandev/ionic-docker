import { useEffect, useState } from "react";
import "./quotes.css";
import { IonItem, IonLabel, IonList, IonText } from "@ionic/react";

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    getQuotes();
  }, []);

  const getQuotes = async () => {
    try {
      const res = await fetch("https://api.quotable.io/quotes");
      const quotes = await res.json()

      setQuotes(quotes.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="container">
      <div className="quotes">
        {quotes.map((quote: any) =>
          <div className="quote" key={quote._id}>
            <p><i>{quote.content}</i></p>
            <p className='author' color='dark'>- {quote.author}</p>
          </div >
          )}
      </div>
    </div>
  );
};

export default Quotes;
