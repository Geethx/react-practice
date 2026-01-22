import { useEffect, useState } from 'react';
import './App.css';
import Profile from './profile.js';
import Count from './Count.js';

  
function App() {
  const [users, setUsers] = useState([]);
  const [name,setName] = useState("");

  const addUser = () => {
    if (!name) return;
    setUsers([...users, {id: Date.now(), name }]);
    setName("");
  };

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  };
  // const todos = [{id: 1, text: "Learn React"}, {id: 2, text: "Practice More"}];
  const mname = "Jeewan";
  const [count,setCount] = useState(0);
  // const [fname, setName] = useState("");
  // const [users, setUsers] = useState([]);

  // const showAlert = () => {
  //   alert("Button Clicked");
  // };

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //   .then(res => res.json())
  //   .then(data => setUsers(data));
  // }, []);

  return(
    <div>
      <h1>Hello {mname}</h1>
      <p>Welcome to React</p>
      <Profile a={mname}/>
      <Count b={count}/>
      {/* <button onClick={() => setCount(count + 1)}>
        Increment count
      </button>

      <button onClick={showAlert}>Click Me</button>;

      <input value={fname} onChange={e => setName(e.target.value)} />
      <p>Your Name: {fname}</p>

      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}

      </ul>

      <ol>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ol>  */}

      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={addUser}>Add User</button>

      <ol>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => deleteUser(user.id)}>Delete User</button>
            </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
