import "./TextAnalyzerStyle.css";
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState , useEffect} from 'react';
import Navbar from "./Navbar";
import Header from "./Header";
import { Link } from "react-router-dom";

function TextAnalyzer() {
  const [inputText, setInputText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [statementCount, setStatementCount] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [exclamationCount, setExclamationCount] = useState(0);
  const [minutesToRead, setMinutesToRead] = useState(0);
  
  // Notification state
  const [isUppercaseNotificationVisible, setIsUppercaseNotificationVisible] = useState(false);
  const [isLowercaseNotificationVisible, setIsLowercaseNotificationVisible] = useState(false);
  const [isTextClearedNotificationVisible, setIsTextClearedNotificationVisible] = useState(false);

  useEffect(() => {
    // Function to analyze text and update statistics
    const analyzeText = () => {
      const text = inputText.trim();
      const words = text.split(/\s+/).filter(word => word.length > 0);
      const characters = text.replace(/\s/g, '').split('');

      // Count statements (periods, exclamation marks, and question marks)
      const statementMatches = text.match(/[.!?]+/g);
      const statementCount = statementMatches ? statementMatches.length : 0;

      // Count questions (individual question marks)
      const questionMatches = text.match(/\?/g); 
      const questionCount = questionMatches ? questionMatches.length : 0;

      // Count exclamations (exclamation marks)
      const exclamationMatches = text.match(/\!+/g);
      const exclamationCount = exclamationMatches ? exclamationMatches.length : 0;

      // Update state with the calculated statistics
      setWordCount(words.length);
      setCharacterCount(characters.length);
      setStatementCount(statementCount);
      setQuestionCount(questionCount);
      setExclamationCount(exclamationCount);

      // Calculate estimated minutes to read based on average reading speed
      const wordsPerMinute = 200; // Average reading speed
      const estimatedMinutes = Math.ceil(words.length / wordsPerMinute);
      setMinutesToRead(estimatedMinutes);
    };

    analyzeText();
  }, [inputText]);

  const handleConvertToUppercase = () => {
    const uppercaseText = inputText.toUpperCase();
    setInputText(uppercaseText);

    // Display uppercase notification
    setIsUppercaseNotificationVisible(true);

    // Remove the notification after 5 seconds
    setTimeout(() => {
      setIsUppercaseNotificationVisible(false);
    }, 5000);
  };

  const handleConvertToLowercase = () => {
    const lowercaseText = inputText.toLowerCase();
    setInputText(lowercaseText);

    // Display lowercase notification
    setIsLowercaseNotificationVisible(true);

    // Remove the notification after 5 seconds
    setTimeout(() => {
      setIsLowercaseNotificationVisible(false);
    }, 5000);
  };

  const handleClearText = () => {
    const confirmation = window.confirm('Do you want to delete the text');
    if (confirmation) {
      setInputText('');

      // Display text cleared notification
      setIsTextClearedNotificationVisible(true);

      // Remove the notification after 5 seconds
      setTimeout(() => {
        setIsTextClearedNotificationVisible(false);
      }, 5000);
    }
  };

  const handleCapitalize = () => {
    const capitalizedText = inputText
      .split(' ')
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ');

    setInputText(capitalizedText);
  };

  return (
    <>
      {/* <Header /> */}
      <div className="container-fluid textanalyze">
        <div className="container text-start">
          <div className="djs">
            <div>
              <h1>Enter The Text To Analyze Below</h1>
              <textarea
                className="form-control textareaincrease"
                id="floatingTextarea"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              ></textarea><br/>
            </div>

            <div className="jhj">
              <button type="button" className="btn btn-primary btn-space" onClick={handleConvertToUppercase}>Convert to uppercase</button>
              <button type="button" className="btn btn-primary btn-space" onClick={handleConvertToLowercase}>Convert to lowercase</button>
              <button type="button" className="btn btn-primary btn-space" onClick={handleCapitalize}>Convert to sentence case</button>
              <button type="button" class="btn btn-primary btn-space">Encode to base64</button>

            <button type="button" class="btn btn-primary btn-space"  onClick={handleClearText}>Clear Text</button>

            <button type="button" class="btn btn-primary btn-space">Extract Numbers</button>

            <button type="button" class="btn btn-primary btn-space">Extract Links</button>

            <button type="button" class="btn btn-primary btn-space">Extract text</button>

            <button type="button" class="btn btn-primary btn-space">Listen now</button>

            <button type="button" class="btn btn-primary btn-space">Remove white space</button>

            <button type="button" class="btn btn-primary btn-space">Remove Special Characters</button>

            <button type="button" class="btn btn-primary btn-space">Copy to clipboard</button>

            <button type="button" class="btn btn-primary btn-space">Paste from clipboard</button>

            <button type="button" class="btn btn-primary btn-space">Reverse text</button>

            <button type="button" class="btn btn-primary btn-space">Start Listening</button>

            <button type="button" class="btn btn-primary btn-space">Change text</button>

            <button type="button" class="btn btn-primary btn-space">Undo Action</button>

            <button type="button" class="btn btn-primary btn-space">Redo Action</button>
              {/* Add other buttons and functionality here */}
            </div><br/>
            <h2>Your Text Summary</h2>
            <div>
              <p>
                <b>{wordCount}</b> words,
                <b>{characterCount}</b> characters,
                <b>{statementCount}</b> statements,
                <b>{questionCount}</b> questions,
                <b>{exclamationCount}</b> exclamations
              </p>
              <p>{minutesToRead} Minutes Read</p>
            </div>
            <h2>Preview</h2>
            <div>{inputText}</div>
          </div>
        </div>

        {/* Display uppercase notification */}
        {isUppercaseNotificationVisible && (
          <div className="container-fluid notification text-start">
            <b>Success</b>: Converted to Uppercase
          </div>
        )}

        {/* Display lowercase notification */}
        {isLowercaseNotificationVisible && (
          <div className="container-fluid notification text-start">
            <b>Success</b>: Converted to Lowercase
          </div>
        )}

        {/* Display text cleared notification */}
        {isTextClearedNotificationVisible && (
          <div className="container-fluid notification text-start">
            <b>Success</b>: Text cleared
          </div>
        )}
      </div>
      {/* <Navbar /> */}
    </>
  );
}

export default TextAnalyzer;
