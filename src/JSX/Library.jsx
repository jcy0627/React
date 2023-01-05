import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book name="JSX name Props 삽입" numOfProps={300} />
        </div>
    )
}

export default Library;