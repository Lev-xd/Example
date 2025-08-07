import "./footer.css"
import CreateX from '../../../src/assets/CreateX.png';
import Facebook from '../../../src/assets/Facebook.png';
import Twitter from '../../../src/assets/Twitter.png';
import YouTube from '../../../src/assets/YouTube.png';
import Telegram from '../../../src/assets/telegram.png';
import Instagram from '../../../src/assets/Instagram.png';
import In from '../../../src/assets/In.png';
import Iphone from '../../../src/assets/Iphone.png';
import Mail from '../../../src/assets/Mail.png';
import Heart from '../../../src/assets/Heart.png';



function App() {

  return (
    <>
      <div>
        <footer>

<div>

<div className="footer">

    <div className="foot-box-1">
        <img src={CreateX} alt="" />

        <h4 className="foot-h4">
            Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts. We provide relevant approaches to online learning, internships and employment in the largest companies in the country. 
        </h4>

        <ul className="ul-img">
            <li><img src={Facebook} alt="" /></li>
            <li><img src={Twitter} alt="" /></li>
            <li><img src={YouTube} alt="" /></li>
            <li><img src={Telegram} alt="" /></li>
            <li><img src={Instagram} alt="" /></li>
            <li><img src={In} alt="" /></li>
        </ul>

    </div>


    <div className="foot-box-2">
        <h2 className="foot-box-2-h2">SITE MAP</h2>

            <p className="foot-box-2-p">About Us</p>
            <p className="foot-box-2-p">Courses</p>
            <p className="foot-box-2-p">Events</p>
            <p className="foot-box-2-p">Blog</p>
            <p className="foot-box-2-p">Contacts</p>
    
    </div>


    <div className="foot-box-3">
        <h2 className="foot-box-2-h2">COURSES</h2>

            <p className="foot-box-2-p">Marketing</p>
            <p className="foot-box-2-p">Management</p>
            <p className="foot-box-2-p">HR & Recruting</p>
            <p className="foot-box-2-p">Design</p>
            <p className="foot-box-2-p">Development</p>

    </div>


    <div className="foot-box-4">
        <h2 className="foot-box-2-h2">CONTACT US</h2>

            <p className="foot-box-2-p"><img src={Iphone} alt="" /> (405) 555-0128</p>
            <p className="foot-box-2-p"><img src={Mail} alt="" /> hello@createx.com</p>

    </div>


    <div className="foot-box-5">
        <h2 className="foot-box-2-h2">SIGN UP TO OUR NEWSLETTER</h2>

            <input className="foot-box-5-inp" type="text" placeholder="Email address"/>
            <p className="foot-box-5-p">*Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.</p>

    </div>

</div>

<div className="foot-box-6">
    <h4 className="foot-box-6-h4">© All rights reserved.Made with <img src={Heart} alt="" /> by Createx Studio </h4>
    <h4 className="foot-box-6-h4">GO TO TOP</h4>
</div>


</div>


        </footer>
      </div>
    </>
  )
}

export default App;