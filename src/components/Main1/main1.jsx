import './main1.css';
import img3 from '../../../src/assets/img3.svg';
import img4 from '../../../src/assets/img4.svg';

const Main1 = () => {
    return(
        <div>
            <div className="baner">
                <div className="baner-1">
                    <div className="baner-box">
                        <div className="bn-1">
                        <img src={img3} alt="" />
                        <p>Play showreel</p>
                    </div>
                    <h1>Enjoy studying with Createx Online Courses</h1>
                    <div className="bn-2">
                        <div className="bor"><h2>About us</h2></div>
                        <button>Explore courses</button>
                    </div>
                    </div>
                    <img src={img4} alt="" />
                </div>
                <div className="baner-2">
                    <div className="baner-box1">
                        <h3>1200</h3>
                        <p>Students graduated</p>
                    </div>
                    <div className="red-cir"></div>
                    <div className="baner-box1">
                        <h3>84</h3>
                        <p>Completed courses </p>
                    </div>
                    <div className="red-cir"></div>
                    <div className="baner-box1">
                        <h3>16 </h3>
                        <p>Qualified tutors</p>
                    </div>
                    <div className="red-cir"></div>
                    <div className="baner-box1">
                        <h3>5</h3>
                        <p>Years of experience</p>
                    </div>
                    <div className="red-cir"></div>
                </div>
            </div>
        </div>
    )
}

export default Main1;