import './contacts.css';
import Chat from "../../../src/assets/Chat.png"
import SmartPhone from "../../../src/assets/Smartphone.png"
import Place from "../../../src/assets/Place.png"
import Socials from "../../../src/assets/socials.png"
import Map from "../../../src/assets/map.png"
import Illus1 from "../../../src/assets/illustration 1.png"
import Main9 from '../Main9/main9';
import Footer from '../Footer/footer';

const Contacts = () => {


  return (
    <div className='Contacts-sec'>

        <div>
            <div className='contacts-map'>

                <div>

                   <h4 className='contact-info'>Contact info</h4>
                   <h2 className='contact-touch'>Get in touch</h2>

                    <div className='contacts-list'>

                    <div className='contacts-mail'>
                        <img src={Chat} alt="" />
                        <div>
                            <p className='contact-p'>Talk to us:</p>
                            <a className='contact-a' href="hello@createx.com">hello@createx.com</a>
                        </div>
                    </div>


                    <div className='contacts-mail'>
                        <img src={SmartPhone} alt="" />
                        <div>
                            <p className='contact-p'>Call us:</p>
                            <a className='contact-a' href="(405) 555-0128">(405) 555-0128</a>
                        </div>
                    </div>


                    <div className='contacts-mail'>
                        <img src={Place} alt="" />
                        <div>
                            <p className='contact-p'>Address:</p>
                            <a className='contact-a' href="2464 Royal Ln. Mesa, New Jersey 45463, USA">2464 Royal Ln. Mesa, New Jersey 45463, USA</a>
                        </div>
                    </div>

                </div>


                <div>
                    <h4 className='contact-h4'>Follow us:</h4>
                    <img className='contact-socials' src={Socials} alt="" />
                </div>
                </div>


                <img className='contacts-map-img' src={Map} alt="" />
            </div>
        </div>




        <div className='contact-part2'>
            <img src={Illus1} alt="" />


            <div>
                <h4 className='contact-info'>Any questions?</h4>
                <h2 className='contact-touch'>Drop us a line</h2>



                <div className="contact-form">
  <div className="form-row">
    <div className="form-group">
      <label>First Name*</label>
      <input type="text" placeholder="Your first name" />
    </div>
    <div className="form-group">
      <label>Last Name*</label>
      <input type="text" placeholder="Your last name" />
    </div>
  </div>

  <div className="form-row">
    <div className="form-group">
      <label>Email*</label>
      <input type="email" placeholder="Your working email" />
    </div>
    <div className="form-group">
      <label>Phone</label>
      <input type="tel" placeholder="Your phone number" />
    </div>
  </div>

  <div className="form-row">
    <div className="form-group full-width">
      <label>Message*</label>
      <textarea placeholder="Your message" rows="5" />
    </div>
  </div>

</div>

        
        <div className='chek-card'>
            <div className='chek-div'>
                <input className='chek-inp' type="checkbox"/>
                <h5 className='chek-h5'>I agree to receive communications from Createx Online School</h5>
            </div>

            <button className='contact-btn-send'>Send message</button>
        </div>


            </div>
        </div>


        <Main9 />

        <Footer />

    </div>
  );
};

export default Contacts;
