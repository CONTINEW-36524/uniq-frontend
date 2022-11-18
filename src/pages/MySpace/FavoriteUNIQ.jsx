import "./MySpace.css"
import React, { useState } from "react";
import CardUserFavorite from '../../components/Card/CardUserFavorite';

function MyUNIQ(props) {
    const [goleft, setGoleft] = useState(false);
    const [goRight, setGoRight] = useState(false);

    const data = props.data;
    console.log(data)

    return (
        <div className='mslist'>
            <div className='msparent'>
                <b className='msrecent'>UNIQ 찜 목록</b>
                <div className="mscontainer">
                    <div className="msprev" onClick={(e) => { setGoleft(!goleft) }}> <b>‹</b> </div>
                    <CardUserFavorite data = {props.data} goleft={goleft} goRight={goRight} />
                    <div className="msnext" onClick={(e) => { setGoRight(!goRight) }}> <b>›</b> </div>
                </div>
            </div>
        </div>
    );
}

export default MyUNIQ;