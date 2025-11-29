
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SeoDetails from './components/SeoDetails/SeoDetails';
import ScrollToTop from './components/ScrollToTop';
import GmcDetails from './components/GmcDetails/GmcDetails';



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
      <ScrollToTop />
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/seo-details' element={<SeoDetails/>}/>
        <Route path='/gmc-details' element={<GmcDetails/>}/>
      </Routes>
      <Footer/>
     </Router>
   )
}

export default App
