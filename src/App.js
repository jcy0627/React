import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import styled from "styled-components";
// Pages
import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';
import CommentList from "./Props/CommentList";
import AttendanceBook from "./ListAndKey/AttendanceBook";
import Notification from "./Lifecycle/Notification";
import Library from "./JSX/Library";
import Accommodate from "./Hooks/Accommodate";
import Confirmbutton from "./Event/ConfirmButton"
import Clock from "./Element/Clock"

const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

function App(props) {
    return (
        <BrowserRouter>
            <MainTitleText>리액트 연습</MainTitleText>
            <Routes>
                <Route index element={<MainPage />} />
                <Route path="post-write" element={<PostWritePage />} />
                <Route path="post/:postId" element={<PostViewPage />} />
                <Route path="comment" element={<CommentList />} />
                <Route path="attendanceBook" element={<AttendanceBook />} />
                <Route path="notification" element={<Notification />} />
                <Route path="library" element={<Library />} />
                <Route path="accommodate" element={<Accommodate />} />
                <Route path="confirmButton" element={<Confirmbutton />} />
                <Route path="clock" element={<Clock />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
