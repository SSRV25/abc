import './App.css';
import React,{useEffect,useState} from 'react'
function App() {
  const [users,setUser]=useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
      result.json().then((resp)=>{
        // console.warn(resp)
        setUser(resp)
      })
    })
  },[])
  console.warn(users)
  return (
    <div className="App">
      <h1>Get API Call </h1>
      <table border="1">
       <tbody>
       <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {
          users.map((item,i)=>
            <tr key={i}>
            <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
            <td>{item.phone}</td>
          </tr>
          )
        }
       </tbody>
      </table>
    </div>
  );
}
export default App;
