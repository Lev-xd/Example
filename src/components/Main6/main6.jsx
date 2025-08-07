import './main6.css';
import img18 from '../../../src/assets/img18.svg';
import img19 from '../../../src/assets/img19.svg';
import img20 from '../../../src/assets/img20.svg';
import img21 from '../../../src/assets/img21.svg';

const Main6 = () => {
    return(
        <div className='obyava'>
            <div className="obyava-in">
            <h2>Createx Certificate</h2>
            <h1>Your expertise will be confirmed</h1>
            <p>We are accredited by international professional organizations and institutes:</p>
            <div className="img-box">
                <img src={img18} alt="" />
                <img src={img19} alt="" />
                <img src={img20} alt="" />
            </div>
            </div>
            <img src={img21} alt="" />
        </div>
    )
}

export default Main6;