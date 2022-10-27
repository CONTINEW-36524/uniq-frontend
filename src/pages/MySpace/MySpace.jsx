import "./MySpace.css"
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux/";
import { Container, Stack, Typography } from '@mui/material';
import { exit } from "../../components/Slice/CreateSurveySlice.js"
import AddAsk from '../../components/createsurvey/AddAsk';
import Modal from "../../components/createsurvey/Modal"
import SelectType from "../../components/createsurvey/SelectType.js"

function MySpace(props) {
  const selectList = ["", "category1", "category2", "category3"];
  const [selected, setSelected] = useState("");
  const dispatch = useDispatch()
  const next = useSelector((state) => state.createSurvey.next);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    console.log(next)
  };
  const closeModal = () => {
    setModalOpen(false);
    dispatch(exit())
  };

  const surveyList = [["설문조사 이름", "카테고리"], ["설문조사 이름", "카테고리"],
  ["설문조사 이름", "카테고리"], ["설문조사 이름", "카테고리"], ["설문조사 이름", "카테고리"], ["설문조사 이름", "카테고리"], ["설문조사 이름", "카테고리"]];
  // db에서 나중에 data 가져오기.

  const handleSelect = (e) => {
    setSelected(e.target.vlaue);
  }

  return (
    <>
      <Container class="mscont">
        <Typography variant="h4" sx={{mb:5}}>
          나의 공간
        </Typography>
      </Container>
    </>
    // <div id="mswrapper">
    //   <div class="mstop">
    //     <button class='mscreate' onClick={openModal}> 설문 생성하기</button>
    //     {next ?
    //       <Modal open={modalOpen} close={closeModal} header="질문 유형 개수를 선택해주세요.">
    //         <AddAsk />
    //       </Modal> :
    //       <Modal open={modalOpen} close={closeModal} header="설문이 보여지는 유형을 선택해주세요.">
    //         <SelectType />
    //       </Modal>
    //     }
    //   </div>
    // </div>
  );
}

export default MySpace;
