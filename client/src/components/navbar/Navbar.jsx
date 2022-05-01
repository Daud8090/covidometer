import './Navbar.css'

function Navbar() {
    return (<>
        <div className="topnav">
            <h1>COVIDOMETER</h1>
            <a href="Myths">Myths</a>
            <a href="Symptoms">Symptoms</a>
            <a href="Dos">Do's & Don'ts</a>
            <a href="Covid">Covid</a>
            <a href="Vaccine">Vaccine</a>
            <a className="active" href="/">Home</a>
        </div>
    </>
    )
}
export default Navbar;