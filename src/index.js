import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
debugger
/**
 * 背景知识：
 * 1. https://reactjs.org/docs/reconciliation.html
 * 2. https://github.com/acdlite/react-fiber-architecture
*/
// LikeButton是一个普通的类，而<LikeButton />就是react组件，这个组件根据JSX规范会被解析为ReactElement即映射为对象
// 我们看到这个对象中的type属性就是LikeButton类，那么是如果生成DOM呢？
// 所以肯定得执行LikeButton然后调用render方法，然后如果有子组件继续调用来获取整个组件树
ReactDOM.render(<App />, document.getElementById('root'), function() {
    // alert('hi, I am done')
    console.log('instance', this)
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
