import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Body from './components/body/Body';
import Navbar from './components/navbar/Navbar';
import Covid from './components/covid/Covid'
import Dos from './components/dos/Dos'
import Myths from './components/myths/Myths'
import Symptoms from './components/symptoms/Symptoms'
import Footer from './components/footer/Footer';
import Vaccine from './components/vaccine/Vaccine';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (<>
    <Router>
      <Switch>
        <Route exact path="/covidometer"><Navbar whichIsActive="home"/> <Body /> <Footer /></Route>
        <Route  path="/covidometer/Covid"> <Navbar whichIsActive="Covid"/> <Covid /> <Footer /></Route>
        <Route  path="/covidometer/Dos" ><Navbar whichIsActive="Dos"/> <Dos /> <Footer /></Route>
        <Route  path="/covidometer/Myths"><Navbar whichIsActive="myths"/> <Myths /> <Footer /></Route>
        <Route  path="/covidometer/Symptoms" ><Navbar whichIsActive="symptons"/> <Symptoms /> <Footer /></Route>
        <Route  path="/covidometer/Vaccine" ><Navbar whichIsActive="vaccine"/> <Vaccine /> <Footer /></Route>
      </Switch>
    </Router>
  </>
  );
}

export default App;
