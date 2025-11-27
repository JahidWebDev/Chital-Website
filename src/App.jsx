
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SeoDetails from './components/SeoDetails/SeoDetails';



function Home() {
  return (
    <>
    <Header/>
    </>
  );
}


function App (){
   return(
     <Router>
      
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/seo-details' element={<SeoDetails/>}/>
      </Routes>
      <Footer/>
     </Router>
   )
}

export default App
