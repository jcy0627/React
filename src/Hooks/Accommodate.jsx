import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);


    useEffect(() => {
        console.log("-------------");
        console.log("useEffect is called");
        console.log(`isFull : ${isFull}`);
        
    } // 가득찼는지에 대한 체크
    );// 모든 컴포넌트 변경에 실행.

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);//count 값이 변경될때마다 실행.

    return (
        <div style={{ padding: 16 }}>
            <p>{`총 ${count}명`}</p>

            <button onClick={increaseCount} disabled={isFull}>
                추가
            </button>
            <button onClick={decreaseCount}>
                제거
            </button>

            {isFull && <p style={{ color: "red" }}>가득참</p>}
        </div>
    );
}
export default Accommodate;