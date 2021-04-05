import React, { Component } from 'react';

class Counter extends Component {

    /*
    constructor(props) {
        super(props);

        this.state = {
            number: 0,
            fixedNumber:0
        };
    }
    */
    state = {
        number: 0,
        fixedNumber:0
    }

    handleIncrease = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    handleDecrease = () => {
        this.setState({
            number: this.state.number - 1
        });
    }

    render() {
        const { number, fixedNumber } = this.state;

        return(
            <div>
                <h1>카운터</h1>
                <h1> value: {number} </h1>
                <h2> 바뀌지 않는 값 : {fixedNumber}</h2>
                <button
                    onClick={() =>{
                        this.setState(
                            {number : number+1},
                            //  setState를 이용해서 값을 변경한 후, 추가적인 특정 작업을 하고 싶을때 두번째 파라미터로 callback 함수 등록
                            () => {
                                console.log("setState 호출! ");
                                console.log(this.state);
                            }
                        );
                    }}
                >
                    +1
                </button>

                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }

}

export default Counter;
