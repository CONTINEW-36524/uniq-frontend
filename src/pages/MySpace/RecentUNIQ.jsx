import "./MySpace.css"
import React, { useState } from "react";
import CardUserRecent from '../../components/Card/CardUserRecent';
import CardUserCreate from '../../components/Card/CardUserCreate';

function MyUNIQ(props) {
    const [goleft, setGoleft] = useState(false);
    const [goRight, setGoRight] = useState(false);
    const data = props.data;

    return (
        <div class='mslist'>
        <div class='msparent'>
          <b class='msrecent'>내가 만든 설문지</b>
          <div class="mscontainer">
            <div class="msprev" onClick={(e) => { setGoleft(!goleft) }}> <b>‹</b> </div>
            <CardUserCreate data = {props.data} goleft={goleft} goRight={goRight} />
            <div class="msnext" onClick={(e) => { setGoRight(!goRight) }}> <b>›</b> </div>
          </div>
          <b class='msrecent'>내가 참여한 설문지</b>
          <div class="mscontainer">
            <div class="msprev" onClick={(e) => { setGoleft(!goleft) }}> <b>‹</b> </div>
            <CardUserRecent goleft={goleft} goRight={goRight} />
            <div class="msnext" onClick={(e) => { setGoRight(!goRight) }}> <b>›</b> </div>
          </div>
        </div>
      </div>
    );
}

export default MyUNIQ;