import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "./components/Footer";


import {Navbar,Feed,Videodetail,Channeldetail,SearchFeed} from './components';

const App = ()=> 
   (
    <Router>
      <Box sx={{backgroundColor:'#000'}}>
        <Navbar/>
      <Routes>
        <Route path="/" exact element={<Feed/>}/>
        <Route path="/video/:id"  element={<Videodetail/>}/>
        <Route path="/channel/:id"  element={<Channeldetail/>}/>
        <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
       
      </Routes>
      <Footer/>
      </Box>
    </Router>
  );


export default App;
