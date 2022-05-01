import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Body from './components/body/Body';
import Navbar from './components/navbar/Navbar';
import Covid from './components/covid/Covid'
import Dos from './components/dos/Dos'
import Myths from './components/myths/Myths'
import Symptoms from './components/symptoms/Symptoms'
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Vaccine from './components/vaccine/vaccine';

function App() {
  return (<>
    <Router>
      <Switch>
        <Route exact path="/"><Navbar/> <Body /> <Footer /></Route>
        <Route  path="/Covid"> <Navbar/> <Covid /> <Footer /></Route>
        <Route  path="/Dos" ><Navbar/> <Dos /> <Footer /></Route>
        <Route  path="/Myths"><Navbar/> <Myths /> <Footer /></Route>
        <Route  path="/Symptoms" ><Navbar/> <Symptoms /> <Footer /></Route>
        <Route  path="/Vaccine" ><Navbar/> <Vaccine /> <Footer /></Route>
      </Switch>
    </Router>
  </>
  );
}

export default App;
