import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book name="리액트 초기 가이드" numOfPage={300} />
        </div>
    )
}

export default Library;