// import React from 'react';
// import ReactDOM from 'react-dom';

// var fn=(str)=>{
//     document.querySelector("#app").innerHTML=str;
// }
// fn('此时使用的是ES6语法')
//ReactDOM.render(<div>react应用开启</div>,document.querySelector("#app"));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Hello from './component/Hello.js';

// ReactDOM.render(<Hello/>,document.querySelector("#app"))
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home/Home.js';
import Page1 from './pages/Page1/Page1.js';
//import getRounter from './router/router.js';

ReactDOM.render(<Home/>,document.querySelector("#app"));