import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './components/ui/Header';

function App() {

  const [items,setItems] = useState([]);
  const [isLoading,setLoading] = useState(true);
  

  return (
    <div className="container">
      <Header />
    </div>
  );
}

export default App;
