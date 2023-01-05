import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";
import data from "../../data.json";
import Library from "../../JSX/Library";
import AttendanceBook from "../../ListAndKey/AttendanceBook";
import Notification from "../../Lifecycle/Notification";
import Accommodate from "../../Hooks/Accommodate";
import ConfirmButton from "../../Event/ConfirmButton";
import Clock from "../../Element/Clock";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

const PostContainer = styled.div`
    padding: 8px 16px;
    border: 1px solid grey;
    border-radius: 8px;
`;

const TitleText = styled.p`
    font-size: 28px;
    font-weight: 500;
`;

const ContentText = styled.p`
    font-size: 20px;
    line-height: 32px;
    white-space: pre-wrap;
`;

const CommentLabel = styled.p`
    font-size: 16px;
    font-weight: 500;
`;

function PostViewPage(props) {
    const navigate = useNavigate();
    const { postId } = useParams();

    const post = data.find((item) => {
        return item.id == postId;
    });

    const [comment, setComment] = useState("");

    return (
        <Wrapper>
            <Container>
                <Button
                    title="뒤로 가기"
                    onClick={() => {
                        navigate("/");
                    }}
                />
                <PostContainer>
                    <TitleText>{post.title}</TitleText>
                    <ContentText>{post.content}</ContentText>
                </PostContainer>

                <CommentLabel>예제</CommentLabel>
                <div>{setInterval }
                {(post.id==1) &&<Library></Library>}
                {(post.id==2) &&<Clock></Clock>}
                {(post.id==4) &&<Notification></Notification>}
                {(post.id==5) &&<ConfirmButton></ConfirmButton>}
                {(post.id==6) &&<Accommodate></Accommodate>}
                   
                </div>
    
            </Container>
        </Wrapper>
    );
}

export default PostViewPage;
