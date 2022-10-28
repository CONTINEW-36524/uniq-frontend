import "./MySpace.css"
import React, { useState } from "react";
import CardUserFavorite from '../../components/Card/CardUserFavorite';

function MyUNIQ(props) {
    const [goleft, setGoleft] = useState(false);
    const [goRight, setGoRight] = useState(false);


    return (
        <div class='mslist'>
            <div class='msparent'>
                <b class='msrecent'>UNIQ 찜 목록</b>
                <div class="mscontainer">
                    <div class="msprev" onClick={(e) => { setGoleft(!goleft) }}> <b>‹</b> </div>
                    <CardUserFavorite goleft={goleft} goRight={goRight} />
                    <div class="msnext" onClick={(e) => { setGoRight(!goRight) }}> <b>›</b> </div>
                </div>
            </div>
        </div>
    );
}

export default MyUNIQ;