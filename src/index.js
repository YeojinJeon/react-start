import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// App.js에서 만들어서 export한 컴포넌트를 불러올 때는 아래와 같이 불러 옴.
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
