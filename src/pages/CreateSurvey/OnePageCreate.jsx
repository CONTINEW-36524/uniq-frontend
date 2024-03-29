import { useSelector, useDispatch } from "react-redux/";
import { increament,makeurl, changesurtitle,changesursubtitle} from "../../Slice/OnepageSlice";
import { useState} from 'react';

import React from "react";
import { Link } from 'react-router-dom';
import { FcList } from "react-icons/fc";
import './OnePageCreate.css';
import '../../../src/App.css'
import { isDOMComponent } from "react-dom/test-utils";
import DropDown from "../../components/Dropdown/Dropdown";
import { useDrag } from 'react-use-gesture';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import EndCreate from '../EndCreate/EndCreate'
import EndCreateModal from '../../components/Modal/EndCreateModal'
import Modal from "../../components/Modal/Modal"
// import { TextField, FormControl } from "@material-ui/core";


const OnePageCreate = (props) => {
    const survey = useSelector((state) => state.onepage.survey);
    const data1 = useSelector((state) => state.onepage.survey.data);
    const count = useSelector((state) => state.onepage.count);
    const dispatch = useDispatch();

    const [isSidebarOpen, closeSidebar] = useState(false);

    const [active, setAtive] = useState("inactive");
    const formData = new FormData();
    const [showEndModal, setEndModal] = useState(false);
    



    const toggleActive = (e) => {
        setAtive((prev) => {
            return e.target.value;
        })
    }
    const nextpage = () => {
        // 생성 후 db로 설문지 info 넣기
        // alert('설문이 생성되었습니다!\n' + "http://210.109.62.78:3000/" + surId)
        // setIp("http://210.109.62.78:3000/respond")
        // setModalOpen(true);
        // <EndCreate ip={ip} modalOpen={modalOpen}/>
    }

    
    const toggleSidebar = () => {
        closeSidebar(isSidebarOpen => !isSidebarOpen)
    }

    const openModal = () => {
        setEndModal(true);
    };
    const closeModal = () => {
        setEndModal(false);
        // dispatch(exit())
    };


    return (

        <div className="container">
            <div className="containerHeader">
                <Form className="form">
                    <Form.Group className="mb-3" controlId="formGrouptitle">
                        <Form.Label column="lg" lg={2}>설문지 제목</Form.Label>
                        <Form.Control size="lg" type="title" value={survey.title} multiline rows={3}
                            onChange={(e) => dispatch(changesurtitle(e.target.value))} placeholder="설문지 제목을 입력하세요." />

                        {/* <FormControl fullWidth sx={{ m: 1 }}> 
                            <TextField
                                label="내용"
                                multiline rows={3}
                                placeholder="설문지 설명을 입력하세요."
                            
                             />
                        </FormControl> */}

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupexplain">
                        <Form.Label>설문지 설명</Form.Label>
                        <Form.Control type="explain" placeholder="설문지 설명을 입력하세요." value={survey.subtitle} onChange={(e) => dispatch(changesursubtitle(e.target.value))} />
                    </Form.Group>
                </Form>

            </div>
            
            <div className="containerContent">
                
                {data1.map((item, index) => (
                    <div className="fadein">
                    <DropDown id={item.did}/> 


                    </div>
                ))}
                
                <div className="containerFooter">
                    <button className="plusBtn" onClick={() => dispatch(increament())}> + </button>
                    <p className="count">- {count} -</p>

                    <button className="w-btn-outline2 w-btn-yellow-outline2" type="button" onClick={()=>{openModal();dispatch(makeurl());}}>생성하기</button>
                    { showEndModal ? 
                        <Modal open={openModal} close={closeModal} header="설문 기간을 설정해주세요."> 
                            <EndCreateModal/> 
                        </Modal>
                        : null 
                    }

                    {/* nextpage대신 testAxios 였음 */}

                </div>
                
            </div>
            

            <section>
                <div className={`${isSidebarOpen ? 'show-sidebar' : 'l-navbar'}`}>
                    <nav className="sidenav">
                        <div>
                            <div className="nav__brand">
                                <FcList color="white" size="50" role="button" onClick={() => toggleSidebar()} />
                                {/* <a className="nav__logo">커스터마이징</a> */}
                            </div>
                            {/* 보류상태입니당..!  */}
                            <div className='options'>
                                <p classNmae='option1'>서식옵션</p>
                                <div className='optionUItag'>
                                    <ui>
                                        <li>
                                            크기 <span className='option1Btn' > ▼ </span> 
                                        </li> 
                                        <li>
                                            배경색 <span className='option1Btn' > ▼ </span>
                                        </li>
                                    </ui>
                                </div>
                                
                            </div>  
                            
                        </div>
                    </nav>
                </div>
            </section>
        </div>


    );
    
}

export default OnePageCreate;