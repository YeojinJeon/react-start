import logo from './logo.svg';
import './App.css';
import React, { Fragment, Component } from 'react';
import MyName from './components/MyName';
import MyComponent from './components/MyComponent';
import Counter from './components/Counter';

// 이렇게 import 하는 것은 webpack 을 사용하기 때문에 가능한건데
// => 프로젝트 빌드시 webpack에서 파일 확장자에 따라서 다른 작업을 하게 됨

/*

 * 컴포넌트 를 만드는 방법 두가지
   1. 클래스를 통해 만드는 방법
      - 클래스 형태로 만들어진 컴포넌트에는 꼭 render() 함수가 있어야 한다!
   2. 함수를 통해 만드는 방법
   여기선 함수를 통해 만들었다.

 */

function App() {

  const style = {
    backgroundColor: 'green',
    color: 'yellow'
  }
  return ( // 이 리턴문 안에 있는 코드가 JSX 다 !

    <Fragment>
      {/*
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
      */}
      
      <div style={style}>
      괜히 "<div></div>" 하나 더 만들어 봤어 : Fragment 테그 사용해 보려고
      </div>
      <MyName name="리액트" /><br/>
      MyComponent
      {/* defaultProps, children */}
      <MyComponent>리액트</MyComponent>
      
      <Counter />
    </Fragment>
  );
}



export default App;
