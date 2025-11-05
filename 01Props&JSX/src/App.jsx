import "./App.css";
import UserCard from "./components/UserCard";

function App() {
  const users = [
    { name: "Nitesh", age: 26 },
    { name: "Priya", age: 23 },
    { name: "Aman", age: 29 },
    { name: "Sneha", age: 22 },
  ];
  return (
    <>
      {/* <h2>hello {name} </h2>
      <Welcome />
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul> */}

      <div className="flex flex-wrap justify-center p-6">
        {users.map((user, index) => (
          <UserCard key={index} name={user.name} age={user.age} />
        ))}

      
      </div>
    </>
  );
}

export default App;
