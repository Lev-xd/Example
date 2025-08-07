import "./courses.css";
import Main7 from '../Main7/main7';
import Main8 from '../Main8/main8';
import Main9 from '../Main9/main9';
import Footer from '../Footer/footer';
import Search from "../../../src/assets/search.png";
import Tutor from "../../../src/assets/BgTutor.png";
import Tutor1 from "../../../src/assets/BgTutor1.png";
import Tutor2 from "../../../src/assets/BgTutor2.png";
import Tutor3 from "../../../src/assets/BgTutor3.png";
import Tutor4 from "../../../src/assets/BgTutor4.png";
import Tutor5 from "../../../src/assets/BgTutor5.png";
import Tutor6 from "../../../src/assets/BgTutor6.png";
import Tutor7 from "../../../src/assets/BgTutor7.png";
import Tutor8 from "../../../src/assets/BgTutor8.png";
import Convert from "../../../src/assets/Convert.png";

function Courses() {
  return (
    <>
      <div>
        

        <div className="about-box-list">
          <h4 className="about-box-1-h4">Enjoy your studying!</h4>
          <h1 className="about-box-1-h1">Our online courses</h1>
        </div>

        <div className="about-box-list-1">
          <ul className="btn-ul">
            <li><button className="btn-all">All</button></li>
            <li><button className="btn-other">Marketing</button></li>
            <li><button className="btn-other">Management</button></li>
            <li><button className="btn-other">HR & Recruting</button></li>
            <li><button className="btn-other">Design</button></li>
            <li><button className="btn-other">Development</button></li>
          </ul>

          <div className="about-box-2">
            <input
              className="about-box-2-inp"
              type="text"
              placeholder="Search course..."
            />
            <img className="about-box-2-search-img" src={Search} alt="Search icon" />
          </div>
        </div>



        <div className="cours-card-list">

          <div className="course-card">
            <img src={Tutor} alt="Google Ads Course" className="course-image" />

            <div className="course-content">
              <span className="course-category">Marketing</span>
              <h3 className="course-title">The Ultimate Google Ads Training Course</h3>
              <p className="course-info">
                <span className="course-price">$100</span> | by Jerome Bell
              </p>
            </div>
          </div>


            <div className="course-card">
            <img src={Tutor1} alt="Google Ads Course" className="course-image" />

            <div className="course-content">
              <span className="course-category1">Management</span>
              <h3 className="course-title">Prduct Management Fundamentals</h3>
              <p className="course-info">
                <span className="course-price">$480</span> | by Marvin McKinney
              </p>
            </div>
          </div>


          <div className="course-card">
            <img src={Tutor2} alt="Google Ads Course" className="course-image" />

            <div className="course-content">
              <span className="course-category2">HR & Recruting</span>
              <h3 className="course-title">HR  Management and Analytics</h3>
              <p className="course-info">
                <span className="course-price">$200</span> | by Leslie Alexander Li
              </p>
            </div>
          </div>


            <div className="course-card">
            <img src={Tutor3} alt="Google Ads Course" className="course-image" />

            <div className="course-content">
              <span className="course-category">Marketing</span>
              <h3 className="course-title">Brand Management & PR Communications</h3>
              <p className="course-info">
                <span className="course-price">$530</span> | by Kristin Watson
              </p>
            </div>
          </div>


            <div className="course-card">
            <img src={Tutor4} alt="Google Ads Course" className="course-image" />

            <div className="course-content">
              <span className="course-category3">Design</span>
              <h3 className="course-title">Graphic Design Basic</h3>
              <p className="course-info">
                <span className="course-price">$500</span> | by Guy Hawkins
              </p>
            </div>
          </div>


          <div className="course-card">
            <img src={Tutor5} alt="Google Ads Course" className="course-image" />

            <div className="course-content">
              <span className="course-category1">Management</span>
              <h3 className="course-title">Business Development Management</h3>
              <p className="course-info">
                <span className="course-price">$400</span> | by Dianne Russell
              </p>
            </div>
          </div>


          <div className="course-card">
            <img src={Tutor6} alt="Google Ads Course" className="course-image" />

            <div className="course-content">
              <span className="course-category4">Development</span>
              <h3 className="course-title">Highload Software Architecture</h3>
              <p className="course-info">
                <span className="course-price">$600</span> | by Brooklyn Simmons
              </p>
            </div>
          </div>


          <div className="course-card">
            <img src={Tutor7} alt="Google Ads Course" className="course-image" />

            <div className="course-content">
              <span className="course-category2">HR & Recruting</span>
              <h3 className="course-title">Human Resources – Selection and Recruitment</h3>
              <p className="course-info">
                <span className="course-price">$150</span> | by Kathryn Murphy
              </p>
            </div>
          </div>


          <div className="course-card">
            <img src={Tutor8} alt="Google Ads Course" className="course-image" />

            <div className="course-content">
              <span className="course-category3">Design</span>
              <h3 className="course-title">User Experience. Human-centered Design</h3>
              <p className="course-info">
                <span className="course-price">$240</span> | by Cody Fisher
              </p>
            </div>
          </div>

        <div className="about-box-5">
    <img src={Convert} alt="" />
    <h3 className="about-box-5-h3">Load more</h3>
        </div>


<Main7/>

<Main8/>

<Main9/>

<Footer/>
        </div>
      </div>
    </>
  );
}

export default Courses;
