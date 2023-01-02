import React from "react";

function Book(props) {
    return (
        <div>
            <h1>{`이 코드는 ${props.name} 이다`}</h1>
        </div>
    )
}

export default Book;