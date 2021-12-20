import './Footer.css'

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
          <div><a href="#">Web Design, Development</a></div>
          <div><a href="#">Web UX Design, Reasearch</a></div>
          <div><a href="#">Web User Interface Design</a></div>
          <div><a href="#">Theme Development, Design</a></div>
          <div><a href="#">Mobile Application Design</a></div>
          <div><a href="#">Wire raming & Prototyping</a></div>
        </div>
        <div className="right box">
        <div className="lower">
            <div className="topic">Contact us</div>
            <div className="phone">
              {/* <a href="#"><i className="fas fa-clock"></i>+007 9089 6767</a> */}
              <a href="#">Arif - 1242442</a><br />
              <a href="#">Daud - 8090910613</a><br />
              <a href="#">Abubakar - 8867686</a><br />
            </div>
            <div className="email">
              {/* <a href="#">abc@gmail.com</a> */}
              <a href="#">arif@gmail.com</a><br />
              <a href="#">daud@gmail.com</a><br />
              <a href="#">abubakar@gmail.com</a><br />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <p class="copyright">© 2018 Mohammad Arif,  Mohd Daud Rahman, Mohd Abubaker</p>
        {/* <p>Copyright © 2020 <a href="#">CodingLab</a> All rights reserved</p> */}
      </div>
    </footer>
  </>
  )
}
export default Footer;