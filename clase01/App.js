//alert("desde main")
//let root = document.querySelector('#root');

//root.innerHTML = `<h2>titulo javascript</h2>`

/* 
let h2 = document.createElement('h2');
h2.innerHTML = 'Hola mundo';
root.appendChild(h2); 
*/

/* 
function App() {
    return React.createElement('h2', {}, 'Hola mundo');
} 
*/

/* 
const App = function(){
    return React.createElement("h2", {}, "Hola mundo");
} 
*/

const App = () => {
    return React.createElement("h2", {}, "Hola mundo");
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App))
