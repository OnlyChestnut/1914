import React from 'react';
import ReactDOM from 'react-dom';
import App from './router'
// import App from './demo/less'

// import App from './demo/antd'
//全局引入样式
// import 'antd/dist/antd.css'
// import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
