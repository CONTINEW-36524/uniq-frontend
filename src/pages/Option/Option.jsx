import React from "react";
import Outline from "../../components/Outline";
import './Option.css';
import mainBanner from "../../assets/main-banner.png";
import question1 from "../../assets/question1.png";

function Option() {
  return (
    <>
      <h1>Option</h1>
      <div class="outline-box">
      <Outline  children={
        <>
        <img class="view" id="banner" src={mainBanner} alt="main-banner" />
        <img class="view" id="question" src={question1} alt="question" />
        <div class="short-answer">
        <div class="short-answer1">
          3. 개선될 점😕
        <form>
          <input type="text" name="answer" class="text-short-answer"/>
        </form>
        </div>
        <div class="short-answer2">
          4. 만족한 점😊
        <form>
          <input type="text" name="answer" class="text-short-answer"/>
        </form>
        </div>
        </div>
        </>
      }>

      </Outline>
      <Outline>

      </Outline>
      </div>

      <hr/>
      <footer>

      </footer>
      
    </>
  );
}

export default Option;
