import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./KakaoLogin.css";
import { KAKAO_AUTH_URL } from "./OAuth";

const KakaoLogin = () => {

    // kakao developers application key
    // const REST_API_KEY = "637c722561c612190048a1d771920d91";
    // const REDIRECT_URI = "http://localhost:3000/oauth/callback/kakao";
    // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    // get auth code from kakao server
    const code = new URL(window.location.href).searchParams.get("code");
    console.log({code})
    // login success: move to MySpace page
    const navigate = useNavigate();
    useEffect(() => {
        // pass auth code to backend server
        // get JWT token from backend server

        (async () => {
            try {
                const res = await axios
                    // add auth code to backend URL
                    // get auth code from this URL
                    .get(
                        // 백엔드에서 설정한 주소
                        `http://localhost:8088/oauth/callback/kakao?code=${code}`

                    )

                    // response from backend server
                    .then((response) => {
                        console.log("ok response", response);
                        const token = response.headers.authorization;
                        // store token in local storage
                        window.localStorage.setItem("token", token);
                        navigate("/"); //수정 필요할 수도 있음
                    });
                console.log(res);
            } catch (e) {
                // response fail error message
                console.error(e);
                //window.alert("로그인 실패");
                //navigate("/"); //수정 필요할 수도 있음
            }

            // get token from local storage
            const token = window.localStorage.getItem("token");

            // pass token to backend
            try {
                const res = await axios
                    .post(
                        // 백엔드에서 설정한 주소
                        "/api/post", //수정 필요
                        {
                            headers: {
                                Authorization: token,
                                //request: token,
                            },
                        }
                    )

                    .then((data) => {
                        window.localStorage.setItem("profile", data);
                        console.log(data);
                        // if get User info, move to MySpace page
                        if (data) {
                            navigate("/myspace"); // 수정 필요
                        }
                    });
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);

    return (
        <>
            <a href={KAKAO_AUTH_URL}>
                {/* <button class='KakaoBtn'>로그인</button> */}
            </a>
        </>
    );
};
export default KakaoLogin;