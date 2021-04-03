import React from 'react';
import PropTypes from "prop-types";

/*
화살표 함수를 이용한 함수형 컴포넌트
*/

const MyComponent = ({name, age, children}) => {
    return (
        <div> 
            안녕하세요. 제 이름은 {name}입니다. <br/>
            나이는 {age} 입니다. <br/>
            children 값은 {children}입니다.           
        </div>)
};

MyComponent.defaultProps = {
    name: '전여진'
};

MyComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
}

export default MyComponent;

