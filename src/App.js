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

function App() {
  return (<>
    <Router>
      <Switch>
        {/* <Route exact path="/" element={<><Navbar/> <Body /></>} />
        <Route  path="/Covid" element={<><Navbar/> <Covid /></>} />
        <Route  path="/Dos" element={<><Navbar/> <Dos /></>} />
        <Route  path="/Myths" element={<><Navbar/> <Myths /></>} />
        <Route  path="/Symptoms" element={<><Navbar/> <Symptoms /></>} /> */}
        <Route exact path="/covidometer"><Navbar/> <Body /> <Footer /></Route>
        <Route  path="/covidometer/Covid"> <Navbar/> <Covid /> <Footer /></Route>
        <Route  path="/covidometer/Dos" ><Navbar/> <Dos /> <Footer /></Route>
        <Route  path="/covidometer/Myths"><Navbar/> <Myths /> <Footer /></Route>
        <Route  path="/covidometer/Symptoms" ><Navbar/> <Symptoms /> <Footer /></Route>
      </Switch>
    </Router>
  </>
  );
}

export default App;
