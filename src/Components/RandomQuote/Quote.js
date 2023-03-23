// This component is used to fetch a random quote from an API and display it on the screen.
// The user can also copy the quote to their clipboard.


// Importing required libraries and components
import React, { useEffect, useState } from "react";
import { ImQuotesLeft } from "@react-icons/all-files/im/ImQuotesLeft";
import { ImQuotesRight } from "@react-icons/all-files/im/ImQuotesRight";
import { FiCopy } from "@react-icons/all-files/fi/FiCopy"
import axios from "axios";
import "./Quote.css";

const Quote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [copyStatus, setCopyStatus] = useState("");
  // Function to fetch quote data from the API
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
      setCopyStatus("")
    } catch (error) {
      console.log(error);
    }
  };
  // Fetch quote data on component mount
  useEffect(() => {
    quoteAPI();
  }, []);
  // Function to copy quote and author to clipboard
  const copyToClipboard = () => {
    const textarea = document.createElement("textarea");
    textarea.textContent = `${quote} -${author}`;
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      setCopyStatus("Quote copied!");
    } catch (err) {
      setCopyStatus("Failed to copy");
    } finally {
      document.body.removeChild(textarea);
    }
  };
  // Render the Quote component
  return (
    <div className="quoteContainer">
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
            <button onClick={copyToClipboard} className="copyQuotebtn"><i><FiCopy /></i></button>
          </div>
          <div className="copyStatus"><p>{copyStatus}</p></div>
        </div>

      </div>
    </div>
  );
}
export default Quote;