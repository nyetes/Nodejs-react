import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screen/LandingPage/LandingPage";
import { BrowserRoute, Router } from "react-router-dom";
import  MyNotes  from './screen/MyNotes/MyNotes';



const App = () => (
// {/* <BrowserRouter> */}
<>
    <Header />
<main>
   {/* <Route path='/' components={LandingPage} exact /> */}
   {/* <Route path='/mynotes' components={() => <MyNotes />} /> */}
</main>
<Footer />
</>

// </BrowserRouter>
)



export default App;
