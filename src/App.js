import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';



function App() {

  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>


    </div>
  );
}

function Users(props) {
  return (
    <div style={{ border: '2px solid blue', margin: '20px' }}>
      <h1>Name:{props.name}</h1>
      <p>Email: {props.email}</p>
    </div>
  )
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))

  }, []);

  return (
    <div >
      <h1>External Users</h1>
      <p>{users.length}</p>
      {
        users.map(user => <Users name={user.name} email={user.email}></Users>)
      }
    </div>
  )

}


function Counter() {
  const [count, setCount] = useState(55);
  const increaseCount = () => setCount(count + 1);
  // const decreaseCount = () => setCount(count - 1);
  const decreaseCount = () => {
    const newCount = count - 1;
    setCount(newCount);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>decrease</button>
    </div>
  )
}


export default App;


// const allProducts = [
//   { name: 'Mobile', price: 2343 },
//   { name: 'laptop', price: 234378 },
//   { name: 'Watch', price: 234 },

// ]

// {
//   allProducts.map(product => <Products name={product.name} price={product.price}></Products>)

// }
// {/* <Products></Products> */}

// function Products(props) {
//   return (
//     <div className="product">
//       <h1>Product Name:{props.name}</h1>
//       <p>Price:{props.price}</p>
//     </div>
//   )
// }