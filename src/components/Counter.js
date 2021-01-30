import React, { Component } from 'react';

class Counter extends Component {

    state = { number: 0 } // class fields 문법을 사용한 정의

    /*********** Component 생성 **********/
    // 1. 생성자
    constructor(props){
        super(props);
        console.log('constructor');
    }
    // 2. ( componentWillMount -> [deprecate] )
    //    => 컴포넌트가 화면에 나가기 직전에 호출되는 API. 하지만 현재는 쓰이지 않음 !
    UNSAFE_componentWillMount(){ // 꼭 필요하다면 이 API를 쓰면 되지만 쓰지마.
        console.log('componentWillMount ->(deprecated)');
    }
    // 3. componentDidMount
    //    => 컴포넌트가 화면에 나가게 되었을 때 호출
    componentDidMount(){
        console.log('componentDidMount');        
    }


    /********** Component Update **********/
    // props의 변화 & state의 변화에 따라 update

    // 1. ( componentWillReceiveProps -> [deprecated] )
    // 컴포넌트가 새로운 props를 받게 되었을 때 호출되는 API. 하지만 현재는 쓰이지 않음!
    UNSAFE_componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps');
    }
    /* 상황에 따라 아래 API로 대체될 수 있음.
    static getDerivedStateFromProps(nextProps, prevState) {
        // 여기서는 setState 를 하는 것이 아니라
        // 특정 props 가 바뀔 때 설정하고 설정하고 싶은 state 값을 리턴하는 형태로
        // 사용됩니다.
        if (nextProps.value !== prevState.value) {
          return { value: nextProps.value };
        }
        return null; // null 을 리턴하면 따로 업데이트 할 것은 없다라는 의미
        
    }
    */
    // 2. shouldComponentUpdate
    shouldComponentUpdate(nextProps, nextState){
      console.log('shouldComponentUpdate');
      if (nextState.number % 5 === 0) return false;
      return true;
    }
    // 3. ( componentWillUpdate -> [deprecated] )
    // shoudComponent 가 true 일때만 불림
    componentWillUpdate(nextProps, nextState) {
      console.log('componentWillUpdate');
    }
    // 4. componentDidUpdate
    // render() 호출 후 발생
    componentDidUpdate(prevProps, prevState) {
      console.log('componentDidUpdate');
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
        console.log('render');
        return(
            <div>
                <h1>카운터</h1>
                <div> value: {this.state.number} </div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }

}

export default Counter;
