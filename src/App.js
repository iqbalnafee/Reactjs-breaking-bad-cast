import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import axios from 'axios';
function App() {

  const [items,setItems] = useState([]);
  const [isLoading,setLoading] = useState(true);
  const [query,setQuery] = useState("");

  //to make the request we will use useEffect when the component is mounted

  //useEffect use arrow functions 

  useEffect( () =>{

    //since we will use axios and axios return a promise we can do async with useEffect. Hence we will use an arrow function inside useEffect
    const fetchItems = async () => {
      const result = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      console.log(result.data);

      setItems(result.data);
      setLoading(false);
    }

    fetchItems();

  // anytime when query changed, we need to call useEffect to fethItem. Hence we need to add query varibale to the useEffect dependency  

  },[query] ); //useEffect 2nd parameter is dependencies

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)}/>
      <CharacterGrid loading={isLoading} items={items} />
    </div>
  );
}

export default App;

//ngrok http 3000
