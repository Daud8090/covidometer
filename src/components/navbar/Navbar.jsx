import './Navbar.css'

function Navbar() {
    return (<>
        <div className="topnav">
            <h1>COVIDOMETER</h1>
            <a href="/covidometer/Myths">Myths</a>
            <a href="/covidometer/Symptoms">Symptoms</a>
            <a href="/covidometer/Dos">Do's & Don'ts</a>
            <a href="/covidometer/Covid">Covid</a>
            <a className="active" href="/covidometer">Home</a>
        </div>
    </>
    )
}
export default Navbar;