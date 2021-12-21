import './Footer.css'
import {Link} from 'react-router-dom';
function Footer() {
  return (<>
    {/* <div class="bottom-container">
    <a class="footer-link" href="https://www.linkedin.com/"> LinkedIn </a>
    <a class="footer-link" href="https://twitter.com/"> Twitter </a>
    <a class="footer-link" href="https://www.instagram.com/"> instagram </a>
    <a class="footer-link" href="https://www.facebook.com"> facebook </a>
    <p class="copyright">© 2018 Mohammad Arif,  Mohd Daud Rahman, Mohd Abubaker</p>
  </div> */}




    <footer>
      <div className="content">
        <div className="left box">
          <div className="upper">
            <div className="topic">About us</div>
            <p>We are college students and making this website is a our project
              in our last Year . We are team of three persons namely Mohammad Arif,
              Mohd Daud Rehman, Mohammad Abubakar.</p>
          </div>

        </div>
        <div className="middle box">
          <div className="topic">Our Services</div>
          <Link to="/covidometer/Myths">Myths</Link><br />
          <Link to="/covidometer/Symptoms">Symptoms</Link><br />
          <Link to="/covidometer/Dos">Do's & Don'ts</Link><br />
          <Link to="/covidometer/Covid">Covid</Link><br />
          <Link to="/covidometer/Vaccine">Vaccine</Link><br />
        </div>
        <div className="right box">
          <div className="lower">
            <div className="topic">Contact us</div>
            <div className="linkedin">
              <a href="#"><i class="fa fa-linkedin"></i>Arif </a><br />
              <a href="https://www.linkedin.com/in/mohd-daud-rehman-a31037181/"><i class="fa fa-linkedin"></i>Daud </a><br />
              <a href="#"><i class="fa fa-linkedin"></i>Abubakar</a><br />
            </div>
            <div className="email ">
              {/* <a href="#">abc@gmail.com</a> */}
              {/* <i class="material-icons">email</i><br /> */}
              <a href="mailto:Arifm8523@gmail.com"><i class="material-icons">email</i> Arif</a><br />
              <a href="mailto:mohdrehman8090@gmail.com"><i class="material-icons">email</i> Daud</a><br />
              <a href="mailto:mohdbakar@iul.ac.in"><i class="material-icons">email</i> Abubakar</a><br />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <p class="copyright">© 2021 Mohammad Arif,  Mohd Daud Rahman, Mohammad Abubakar</p>
        {/* <p>Copyright © 2020 <a href="#">CodingLab</a> All rights reserved</p> */}
      </div>
    </footer>
  </>
  )
}
export default Footer;