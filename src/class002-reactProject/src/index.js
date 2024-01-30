// src/index.js 是 js 的入口文件
// 引入 ReactDOM

import React from 'react';
import ReactDOM from 'react-dom/client';

// 创建一个JSX
const App = <div>
    <h1>this is a react project</h1>
    <p>i have a react project!!</p>
</div>

// 获取根容器
const root = ReactDOM.createRoot(document.getElementById('root'));
// 将 App 渲染进根容器
root.render(App);