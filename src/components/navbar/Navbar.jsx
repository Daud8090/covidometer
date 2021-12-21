import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar(props) {
    return (<>
        <div className="topnav">
            <h1>COVIDOMETER</h1>
            
            <Link  to="/covidometer/Myths">Myths</Link>
            <Link to="/covidometer/Symptoms">Symptoms</Link>
            <Link to="/covidometer/Dos">Do's & Don'ts</Link>
            <Link to="/covidometer/Covid">Covid</Link>
            <Link to="/covidometer/Vaccine">Vaccine</Link>
            <Link className="active" to="/covidometer">Home</Link>
        </div>
    </>
    )
}
export default Navbar;