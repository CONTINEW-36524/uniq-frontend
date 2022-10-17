import "./MySpace.css"
import React, { useState } from "react";
import { Link } from "react-router-dom";

function MySpace(props) {
  const selectList = ["", "category1", "category2", "category3"];
  const [selected, setSelected] = useState("");

  const surveyList = [["설문조사 이름", "카테고리"], ["설문조사 이름", "카테고리"],
  ["설문조사 이름", "카테고리"], ["설문조사 이름", "카테고리"], ["설문조사 이름", "카테고리"], ["설문조사 이름", "카테고리"], ["설문조사 이름", "카테고리"]];
  // db에서 나중에 data 가져오기.

  const MyUNIQ = () => {
    alert("나의 UNIQ");
  };
  const FavoriteUNIQ = () => {
    alert('UNIQ 찜 목록');
  };
  const RecentSurvey = () => {
    alert("최근 설문지");
  };

  const handleSelect = (e) => {
    setSelected(e.target.vlaue);
  }

  return (
    <div id="mswrapper">
      <div class="mstop">
        <Link to="/createSurvey">
          <button class="mscreate">설문 생성하기</button>
        </Link>
      </div>

      <hr class="mstt" />
      <div class="msmiddle">
        <button class="msbtn" onClick={MyUNIQ}>나의 UNIQ</button>
        <button class="msbtn" onClick={FavoriteUNIQ}>UNIQ 찜 목록</button>
        <button class="msbtn" onClick={RecentSurvey}>최근 설문지</button>
      </div>

      <hr class="mstt" />
      <div class="mscategory">
        <div class="msatext">카테고리 선택&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div class="mscatedrop">
          <select onChange={handleSelect} value={selected}>
            {selectList.map((item) => (
              <option value={item} kye={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <button class="mssearch">검색</button>
      </div>

      <hr class="mstt" />
      <div class="msbuttom">
        <div id="msbox">
          <div class="msboximg">
            <Link to="/createSurvey">
              <button class="msplus">+</button>
            </Link>
          </div>
          <div class="msboxdata">
            <h1 class="mshead">설문 생성하기</h1>
          </div>
        </div>

        {surveyList.map((item) => (
          <div id="msbox">
            <div class="msboximg" />
            <div class="msboxdata">
              <h1 class="mshead">{item[0]}</h1>
              <span class="msboxcontent">{item[1]}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MySpace;
