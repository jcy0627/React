import React from "react";

const students =[
    {id:1,name:"name1"},
    {id:2,name:"name2"},
    {id:3,name:"name3"},
];

function AttendanceBook(props) {
    return(
        <ul>
            {students.map((student) =>{
                return <li>  {student.name}</li>
            })}
        </ul>
    )
}

export default AttendanceBook;