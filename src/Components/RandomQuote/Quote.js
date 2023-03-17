//inspired by 
import React, { useEffect, useState } from "react";
import { ImQuotesLeft } from "@react-icons/all-files/im/ImQuotesLeft";
import { ImQuotesRight } from "@react-icons/all-files/im/ImQuotesRight";
import {FiCopy} from "@react-icons/all-files/fi/FiCopy"
import axios from "axios";
import "./Quote.css";

const Quote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const quoteAPI = async () => {
    let quotesArray = [];
    try {
      const data = await axios.get("https://api.quotable.io/random");
      quotesArray = data.data;

    } catch (error) {
      console.log(error);
    }

    try {
      setQuote(quotesArray.content);
      setAuthor(quotesArray.author);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    quoteAPI();
  }, [])


  return (
    <div className="container">

      <div className="mainContent">
        <div className="title">
          <h5>Quote Of The Day</h5>
        </div>
        <div className="textArea">
          <span className="quote">
            <i><ImQuotesLeft /></i> {quote} <i><ImQuotesRight /></i>
          </span>
        </div>
        <div className="author">-{author}</div>
        <div className="buttonArea">
          <div className="btn">
            <button onClick={quoteAPI} className="getQuotebtn">Get a Quote</button>
            <button className="copyQuotebtn"><i><FiCopy/></i></button>
          </div>
        </div>
      </div>


    </div>
  );
}


export default Quote;