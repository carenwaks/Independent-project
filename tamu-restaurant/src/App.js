import './App.css';
import React,{useEffect} from 'react';

function App() {
  // const [menuItems,setMenuItems] = useState([]);
  useEffect(() => {
    fetch("")
      .then((r) => r.json())
      .then((data) => console.log(data))
  }, []); 
  return (
    <div className="App">
      <header className="App-header">
        Independent project
      </header>
      <div>
        
      </div>
    </div>
  );
}

export default App;
