import React from 'react';
import './Modal.css';
import { useState} from 'react';
import { useSelector, useDispatch } from "react-redux/";
import {closeModal} from "../../Slice/CreateSurveySlice"

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;
  const dispatch = useDispatch()

  // const exit = () => {
  //   close;
  //   dispatch(closeModal())
  // }

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={
              close
            }>
              &times;
            </button>
          </header>
          <main>{props.children}</main>
          <footer>
            {/* <button className="close" onClick={close }>
              close
            </button> */}
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
