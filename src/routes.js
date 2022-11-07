// import { Navigate, useRoutes } from 'react-router-dom';
// // layouts
// //
// import Home from "./pages/Home/Home";
// import About from "./pages/About";
// import Template from "./pages/Template/Template";
// import MySpace from "./pages/MySpace/MySpace";
// import CreateSurvey from "./pages/CreateSurvey";
// import Onepage from "./pages/Onepage/Onepage";
// import Card from "./pages/Card/Card"
// import Option from "./pages/Option/Option";
// import optionDropdown from "./components/createsurvey/optionDropdown";
// import Result from "./pages/Result/CardResult"
// import EndCreate from "./pages/EndCreate/EndCreate"
// import RespondOnePage from "./pages/Respond/RespondOnePage"
// import RespondCard from "./pages/Respond/RespondCard";
// import KakaoLogin from "./pages/Login/KakaoLogin";
// import NotFound from "./pages/NotFound";

// 각 페이지별로 종속관계 설정부분... app.js변경하면서 다시 해야할 듯..
// // ----------------------------------------------------------------------

// export default function Router() {
//     const routes = useRoutes([
//         {
//             path: '/',
//             element: <Home />,
//             children: [
//                 { element: <Navigate to="/home" />, index: true },
//                 { path: 'home', element: <Home /> },
//                 { path: 'template', element: <Template /> },
//                 { path: 'myspace', element: <MySpace /> },
//                 { path: 'about', element: <About /> },
//                 { path: 'result', element: <Result /> }
//             ],
//         },
//         {
//             path: '/createsurvey',
//             element: <CreateSurvey />,
//             children: [
//                 { element: <Navigate to="/createsurvey" />, index: true },
//                 { path: 'onepage', element: <Onepage /> },
//                 { path: 'Card', element: <Card /> },
//                 { path: 'endcreate', element: <EndCreate /> },
//                 { path: 'option', element: <Option /> },
//                 { path: 'optionDrop', element: <optionDropdown /> },
//             ],
//         },
//         {
//             path: '/login',
//             element: <KakaoLogin />,
//         },
//         {
//             path: '/respondOnepage',
//             element: <RespondOnePage />,
//         },
//         {
//             path: '/respondCard',
//             element: <RespondCard />,
//         },
//         {
//             element: <Home />,
//             children: [
//                 { element: <Navigate to="/home" />, index: true },
//                 { path: '404', element: <NotFound /> },
//                 { path: '*', element: <Navigate to="/404" /> },
//             ],
//         },
//         {
//             path: '*',
//             element: <Navigate to="/404" replace />,
//         },
//     ]);

//     return routes;
// }
