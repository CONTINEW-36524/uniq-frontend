import axios from "axios";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./KakaoLogin.css";

const KakaoLogin = () => {

    // kakao developers application key
    // const REST_API_KEY = "637c722561c612190048a1d771920d91";
    // const REDIRECT_URI = "http://210.109.62.78:3000//oauth/callback/kakao";
    // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    // get auth code from kakao server
    const location = useLocation();
    const navigate = useNavigate();

       

    useEffect(() => {
        // pass auth code to backend server
        // get JWT token from backend server
        //현재 윈도우 창의 주소값 불러옴
        const href = window.location.href;
        //현재 url의 파라미터를 가져옴
        let params = new URL(window.location.href).searchParams;
        //params에 저장된 파라미터 안에서 'code'의 값을 가져옴
        let code = params.get("code");

        (async () => {
            try {
                const res = await axios.get(
                        '/api/kakao?code', {
                            params:{
                                code : code
                            }
                        }
                    )
                    // response from backend server
                    .then((response) => {
                        console.log("ok response", response);
                        const token = res.headers.authorization;

                        console.log(token)
                        // store token in local storage
                        window.localStorage.setItem("token", token);
                        
                        // window.localStorage.setIem("nickname", response.kakao_account.profile.nickname)
                        navigate("/"); //수정 필요할 수도 있음
                    }).catch(function(error){
                        console.log("에러")
                        navigate("/")
                      });;
                // console.log(res);
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
                    .get(
                        // 백엔드에서 설정한 주소
                        "http://localhost:8080", //수정 필요
                        {
                            headers: {
                                Authorization: token,
                                request: token,
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
export const REDIRECT_URI="http://localhost:3000/oauth/callback/kakao";
export const REST_API_KEY = "637c722561c612190048a1d771920d91";
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;