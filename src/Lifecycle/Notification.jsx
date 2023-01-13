import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    messageText:{
        color:"black",
        fontSize: 16,
    },
};


class Notification extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}; // state
    }

    componentDidMount() { // 컴포넌트 생성 시
        console.log(`${this.props.id}   mount`);
    }
    componentDidUpdate() { // 컴포넌트 업데이트 시
        console.log(`${this.props.id}  update`);
    }
    componentWillUnmount() { // 컴포넌트 소멸 시
        console.log(`${this.props.id}  unmount`);
    }

    render() {
        return(
            <div style={styles.wrapper}>
                <span style={styles.messageText}>
                    {this.props.message}
                </span>
            </div>
        )
    }
}
export default Notification;