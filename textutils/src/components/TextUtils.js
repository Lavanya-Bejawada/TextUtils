import 'bootstrap/dist/css/bootstrap.css';
import "./TextUtilsStyle.css";
import React from 'react';
import Navbar from './Navbar';
import Header from './Header';

function TextUtils() {
  return (
  <>
  {/* <Header /> */}
   <div className="container text-start" style={{marginTop:"50px"}}>
      <h1>About Us</h1>
      <p>
  
          <b>TextUtils</b> is a ReactJs website built primarily to do various
  
          operations on regular typed text. You can safely use WordPad or NotePad
  
          for text drafting, and saving, but <i>TextUtils</i> offers much more
  
          than simple text drafting and formatting. TextUtils can convert your
  
          text to any case in just one simple click of a button. It can extract
  
          links and numbers safely from a labyrinth of random text or
  
          sophisticated documentation. It has an improved property of base64
  
          encoding, reversal of your inputted text.You can even remove whitespaces
  
          from your scripted documents, and wear up your earphones to listen to
  
          it, instead of straining your eyes! It does a detailed analyzing of your
  
          text, and provides an output of words, and characters, along with
  
          reading time as well. The best part of <i>TextUtils</i> is that it is an
  
          open source project, as a result, dozens of new features are in the
  
          upcoming, which definitely makes it a cut above the rest. <br />
  
          The most eminent features of the website are as follows :
  
        </p>
  
        <div className="accordion" id="accordionExample">
  
          <div className="accordion-item" >
  
            <h2 className="accordion-header" id="headingOne">
  
              <button
  
                className="accordion-button"
  
                type="button"
  
                data-bs-toggle="collapse"
  
                data-bs-target="#collapseOne"
  
                aria-expanded="true"
  
                aria-controls="collapseOne"
  
              >
  
                <strong>Analyze Your Text</strong>
  
              </button>
  
            </h2>
  
            <div
  
              id="collapseOne"
  
              className="accordion-collapse collapse show"
  
              aria-labelledby="headingOne"
  
              data-bs-parent="#accordionExample"
  
   
  
            >
  
              <div className="accordion-body">
  
                It is a <i>Simple Text Analyzer</i> , which mutilates your text,
  
                but in a tender way
  
              </div>
  
            </div>
  
          </div>
  
          <div className="accordion-item" >
  
            <h2 className="accordion-header" id="headingTwo">
  
              <button
  
                className="accordion-button collapsed"
  
                type="button"
  
                data-bs-toggle="collapse"
  
                data-bs-target="#collapseTwo"
  
                aria-expanded="false"
  
                aria-controls="collapseTwo"
  
   
  
              >
  
                <strong>Free to use</strong>
  
              </button>
  
            </h2>
  
            <div
  
              id="collapseTwo"
  
              className="accordion-collapse collapse"
  
              aria-labelledby="headingTwo"
  
              data-bs-parent="#accordionExample"
  
   
  
            >
  
              <div className="accordion-body">
  
                It is completely <i>free</i> to use. No credit cards required. Use
  
                as much as you want!!
  
              </div>
  
            </div>
  
          </div>
  
          <div className="accordion-item" >
  
            <h2 className="accordion-header" id="headingThree">
  
              <button
  
                className="accordion-button collapsed"
  
                type="button"
  
                data-bs-toggle="collapse"
  
                data-bs-target="#collapseThree"
  
                aria-expanded="false"
  
                aria-controls="collapseThree"
  
   
  
              >
  
                <strong>Browser Compatible</strong>
  
              </button>
  
            </h2>
  
            <div
  
              id="collapseThree"
  
              className="accordion-collapse collapse"
  
              aria-labelledby="headingThree"
  
              data-bs-parent="#accordionExample"
  
   
  
            >
  
   
  
              <div className="accordion-body">
  
                It is compatible with all of your <i>favorite</i> browsers.
  
              </div>
  
            </div>
  
          </div>
  
        </div>
  
      
    </div>
    {/* <Navbar /> */}
  </>
   
  );
}

export default TextUtils;