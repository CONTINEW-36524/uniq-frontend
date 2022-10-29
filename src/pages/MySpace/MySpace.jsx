import "./MySpace.css"
import React, { useState, useEffect } from "react";
import { Container, Stack, Typography } from '@mui/material';
import { useSelector, useDispatch } from "react-redux/";
import { exit } from "../../components/Slice/CreateSurveySlice.js"
import AddAsk from '../../components/createsurvey/AddAsk';
import { MyspaceSidebar } from '../../section/myspace'
import Modal from "../../components/createsurvey/Modal"
import SelectType from "../../components/createsurvey/SelectType.js"
import FavoriteUNIQ from './FavoriteUNIQ'
import RecentUNIQ from './RecentUNIQ'
import axios from "axios";

function MySpace(props) {
  const dispatch = useDispatch()
  const next = useSelector((state) => state.createSurvey.next);
  const [modalOpen, setModalOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [myUniq, setMyUniq] = useState([]);
  const [myFavorites, setMyFavorites]=useState([]);


  const openModal = () => {
    setModalOpen(true);
    console.log(next)
  };
  const closeModal = () => {
    setModalOpen(false);
    dispatch(exit())
  };
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  

  useEffect(()=>{
    axios.get('/api/myspace/my-uniq',{
        params:{
          user_id: 1
        }
      }
    ).then(function(response){
      console.log(response.data)
      setMyUniq(response.data)
      console.log(myUniq)
      console.log('마운트');
    
    }).catch(function(error){
      console.log("에러")
    });

    axios.get('/api/myspace/my-favorites',{
      params:{
        user_id: 1
      }
    }
  ).then(function(response){
    console.log(response.data)
    setMyFavorites(response.data)
    console.log(myFavorites)
    console.log('마운트');
  
  }).catch(function(error){
    console.log("에러")
  });
  }, [])
  // db에서 나중에 data 가져오기.

  return (
    <div id="mswrapper">
      <div class="mstop">
        <button class='mscreate' onClick={openModal}> 설문 생성하기</button>
        {next ?
          <Modal open={modalOpen} close={closeModal} header="질문 유형 개수를 선택해주세요.">
            <AddAsk />
          </Modal> :
          <Modal open={modalOpen} close={closeModal} header="설문이 보여지는 유형을 선택해주세요.">
            <SelectType />
          </Modal>
        }
      </div>

      <hr class="mstt" />
      <div class="msmiddle">
        <button class="msbtn" 
        onClick={() => {
          setVisible1(true);
          setVisible2(false);}}>UNIQ 찜 목록</button>
        <button class="msbtn" id="last" 
        onClick={() => {
          setVisible1(false);
          setVisible2(true);}}>최근 설문지</button>
        <MyspaceSidebar
          openFilter={openFilter}
          onOpenFilter={handleOpenFilter}
          onCloseFilter={handleCloseFilter}
        />
      </div>
      {/* 버튼 눌러 list불러오기 */}
      {visible1 && <FavoriteUNIQ data={myFavorites}/>}
      {visible2 && <RecentUNIQ data={myUniq}/>}
    </div>
  );
}

export default MySpace;
