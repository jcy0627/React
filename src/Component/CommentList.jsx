import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "정찬영",
        comment:"댓글 내용 1",
    },
    {
        name: "찬영",
        comment: "댓글 내용 2",
    },
]//배열 선언

   
function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => { // 선언된 배열을 반복처리하는 Array.map() JavaScript 함수
                return (
                    <Comment name={comment.name} comment={comment.comment} />// 내부 컴포넌트 props
                );
            })}

            
            
        </div>
    );
}

export default CommentList;