const REDIRECT_URI="http://localhost:3000/oauth/callback/kakao";
const REST_API_KEY = "637c722561c612190048a1d771920d91";
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;