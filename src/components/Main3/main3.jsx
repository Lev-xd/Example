import './main3.css';
import img7 from '../../../src/assets/img7.svg';
import img8 from '../../../src/assets/img8.svg';
import img9 from '../../../src/assets/img9.svg';
import img10 from '../../../src/assets/img10.svg';
import img11 from '../../../src/assets/img11.svg';
import img12 from '../../../src/assets/img12.svg';


const Main3 = () => {
    return(
        <div className='sec-3'>
            <div className="cours">
                <h6>Ready to learn?</h6>
                <div className="tex-bt">
                    <h1>Featured Courses</h1>
                    <button>View all courses</button>
                </div>
            </div>

            <div className="container">
                 <div className="card-container">
                <div className="card1">
                    <img src={img7} alt="" />
                    <div className="card-in">
                        <div className="bg-1"><h3>Marketing</h3></div>
                        <h2>The Ultimate Google Ads Training Course</h2>
                        <h4>$100 <h5>Ӏ by Jerome Bell</h5></h4>
                    </div>
                </div>

                <div className="card1">
                    <img src={img8} alt="" />
                    <div className="card-in">
                        <div className="bg-2"><h3>HR & Recruting</h3></div>
                        <h2>HR  Management and Analytics</h2>
                        <h4>$200 <h5>Ӏ by Leslie Alexander Li</h5></h4>
                    </div>
                </div>

                <div className="card1">
                    <img src={img9} alt="" />
                     <div className="card-in">
                        <div className="bg-3"><h3>Management</h3></div>
                        <h2>Business Development Management</h2>
                        <h4>$400 <h5>Ӏ by Dianne Russell</h5></h4>
                    </div>
                </div>
            </div>

            <div className="container-card">
                <div className="card1">
                    <img src={img10} alt="" />
                     <div className="card-in">
                        <div className="bg-3"><h3>Management</h3></div>
                        <h2>Prduct Management Fundamentals</h2>
                        <h4>$480 <h5>Ӏ by Marvin McKinney</h5></h4>
                    </div>
                </div>

                <div className="card1">
                    <img src={img11} alt="" />
                    <div className="card-in">
                        <div className="bg-1"><h3>Marketing</h3></div>
                        <h2>Brand Management & PR Communications</h2>
                        <h4>$530 <h5>Ӏ by Kristin Watson</h5></h4>
                    </div>
                </div>

                <div className="card1">
                    <img src={img12} alt="" />
                    <div className="card-in">
                        <div className="bg-4"><h3>Design</h3></div>
                        <h2>Graphic Design Basic</h2>
                        <h4>$500 <h5>Ӏ by Guy Hawkins</h5></h4>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Main3;