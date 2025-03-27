import "./App.css";
import Counter from "./Counter";
import Batsman from "./Batsman";
import Users from "./Users";
import { Suspense } from "react";
import Friends from "./Friends";
import Posts from "./Posts";
import Players from "./Players";

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())

// const fetchFriends = async() => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   return res.json();
// }

// const fetchPosts = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// };

function App() {
  // const friendsPromise = fetchFriends()
  // const postPromise = fetchPosts();

  // function handleClick() {
  //   alert("I am clicked.");
  // }

  // const handleClick3 = () => {
  //   alert("barbar shudu amake click koro");
  // };

  // const handleAdd5 = (num) => {
  //   const newNum = num + 5;
  //   alert(newNum);
  // };

  return (
    <>
      <h3>Vite + React</h3>

      <Players></Players>

      {/* <Suspense fallback={<h2>Posts are coming....</h2>}>
  <Posts postsPromise={postPromise} ></Posts>
</Suspense> */}

      
      {/* <Suspense fallback={<h2>Posts are coming....</h2>}>
        <Posts key={Posts.id} postPromise={postPromise}></Posts>
      </Suspense> */}


      {/* <Suspense fallback={<h1>Friends are coming for treat...</h1>}>
     <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Loading.....</h3>}>
      <Users fetchUsers= {fetchUsers}></Users>

      </Suspense> */}

      {/* <Batsman></Batsman>
      <Counter></Counter> */}

      {/* <button onClick="handleClick()">Click Me</button> */}
      {/* <button onClick={handleClick}>Click Me</button>
      <button
        onClick={function handleClick2() {
          alert("why did you click me again?");
        }}
      >
        Click Me again
      </button>
      <button onClick={handleClick3}>Click me more</button>
      <button onClick={() => alert("abar click korlire ekhon ki hobe re amar")}>
        click me please
      </button>

      <button onClick={() => handleAdd5(10)}>Click ADD 5</button> */}
    </>
  );
}

export default App;
