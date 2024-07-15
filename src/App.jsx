
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Mywork from './Components/Mywork/Mywork';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Services from './Components/Services/Services';

function App() {
  return (
    <>
<Navbar/>
<Profile/>
<About/>
<Services/>
<Mywork/>
<Contact/>
<Footer/>
    </>
  );
}

export default App;
