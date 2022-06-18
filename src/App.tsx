import { Post } from "./components/Post";

function App() {
    return (
      <div className="App">
        <Post nome="Felix" email="felix.email@email.com" idade={30}/>
      </div>
    );
  }
  
  export default App;
  