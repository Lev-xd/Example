import './main7.css';   
import Facebook from "../../../src/assets/Facebook.png"
import Instagram from "../../../src/assets/Instagram.png"
import In from "../../../src/assets/In.png"
import Tutor from "../../../src/assets/Tutor.png"
import Tutor1 from "../../../src/assets/Tutor1.png"
import Tutor2 from "../../../src/assets/Tutor2.png"
import ArrowLeft from "../../../src/assets/Arrow-left.png"
import Zapataya from "../../../src/assets/Zapataya.png"
import Elnora from "../../../src/assets/Elnora.png"
import ArrowRight from "../../../src/assets/ArrowRight.png"
import Scroll from "../../../src/assets/Scroll.png"

const Main7 = () => {
    return (
        <div className="sec7">

            <div className='desc-list'>
                <h3 className="Best-tutors">Best tutors are all here</h3>
                <h2 className="Meet-team">Meet our team</h2>
            </div>


            <div className='card-tutor-list'>

            <div className="card-tutor">
                <div className="bg-tutor">
                    <img src="" alt="" />
                    <div className='img-list'>
                        <img src={Facebook} alt="Facebook" />
                        <img src={Instagram} alt="Instagram" />
                        <img src={In} alt="LinkedIn" />
                    </div>
                </div>
                <h2 className='tutor-name'>Dianne Russell</h2>
                <h4 className='Founder'>Founder and CEO</h4>
            </div>
            

            <div className="card-tutor">
                <div className="bg-tutor1">
                    <img className='tutor-img' src={Tutor} alt="" />
                </div>
                <h2 className='tutor-name'>Jerome Bell</h2>
                <h4 className='Founder'>Founder and Program Director</h4>
            </div>


            <div className="card-tutor">
                <div className="bg-tutor1">
                    <img className='tutor-img' src={Tutor1} alt="" />
                </div>
                <h2 className='tutor-name'>Kristin Watson</h2>
                <h4 className='Founder'>Marketer, Curator of Marketing Course</h4>
            </div>


            <div className="card-tutor">
                <div className="bg-tutor1">
                    <img className='tutor-img' src={Tutor2} alt="" />
                </div>
                <h2 className='tutor-name'>Marvin McKinney</h2>
                <h4 className='Founder'>PM, Curator of Management Course</h4>
            </div>

            </div>




            <div className='TEST-list'>
                <h3 className="TESTIMONIALS">TESTIMONIALS</h3>
                <h2 className="What-say">What our students say</h2>
            </div>

<div className='Card-eleanora'>

<button className='Arrow-Left-btn'>
    <img src={ArrowLeft} alt="" />
</button>


<div className='Eleanors-desc'>
    <img className='Zapataya' src={Zapataya} alt="" />

    <div>

    <h2 className='Eleanors-lorem'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.
    </h2>

    <div className='Eleanors-avatar'>
        <img className='Eleanors-img' src={Elnora} alt="" />

        <div>
        <h3 className='Eleanors-name'>Eleanor Pena</h3>
        <h2 className='Position'>Position, Course</h2>
        </div>

    </div>

    </div>
</div>


<button className='ArrowRight-btn'><img src={ArrowRight} alt="" /></button>

</div>

<div className='Scroll-img'>
    <img src={Scroll} alt="" />
</div>


        </div>
    );
}

export default Main7;
