import { Container } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from "react";
import './App.css';
import Definations from './components/Definations/Definations';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';




function App() {
  const [word, setWord] = useState("");
  const [meanings, setmeanings] = useState([]); 
const [category, setcategory] = useState("en");
  const dictionaryApi = async() => {
    try {
       const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
        );

        
        setmeanings(data.data);

    }catch(error) {
      console.log(error);
    }
  };
  console.log(meanings);

  useEffect(() => {
dictionaryApi();  
  },[word, category]);

  return (
    <div className="App" 
    style={{height: "100vh", backgroundColor: "#282c34", color: "white"}}
    >
      <Container className = "con"  maxWidth= "md" 
      style={{display: "flex", 
      flexDirection: "colum",
       height: "100vh",
      justifyContent : "space-evenly",
     }}
       >
       <Header
          setWord={setWord}
          category={category} 
          setcategory = {setcategory}
          word={word}
          setMeanings = {setmeanings}
          
        />
        {meanings && (
          <Definations
            meanings={meanings}
            word={word}
            category={category}
          />
        )}
        </Container>
        <Footer />

    </div>
  ); 
}

export default App;