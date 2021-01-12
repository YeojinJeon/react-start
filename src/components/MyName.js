/*
* 리액트 컴포넌트에서 다루는 데이터 2개
1. props
   - 부모 컴포넌트가 자식 컴포넌트에게 주는 값
   - 자식 컴포넌트는 props를 받아오기만 하고 수정할 수는 없다.
2. state
   - 컴포넌트 내부에서 선언하며 내부에서 값을 변경할 수 있다.  
*/

import React, { Component } from 'react';


class MyName extends Component 
{
    render() {
        return (
            <div>
                안녕하세요. 제 이름은 <strong>{this.props.name}</strong>입니다.
            </div>
        );
    }
}

MyName.defaultProps = {
    name: '전여진'
};

export default MyName;
// export 빼먹으면 아래와 같은 컴파일 에러 뜸
// Attempted import error: './components/MyName' does not contain a default export (imported as 'MyName').