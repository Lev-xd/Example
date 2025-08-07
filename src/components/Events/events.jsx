import "./events.css"
import Select from "../../../src/assets/Select.png"
import Search from "../../../src/assets/search.png"
import Palki from "../../../src/assets/Palki.png"
import Kvadrat from "../../../src/assets/Kvadrat.png"
import LineStroke from "../../../src/assets/Line-Stroke.png"
import Main9 from '../Main9/main9';
import Footer from '../Footer/footer';




function App() {
    return (
      <>
        <div className="Events">

          <div className="events-text">
            <h4 className="events-h4">Our events</h4>
            <h1 className="events-h1">Lectures, workshops & master-classes</h1>
          </div>



          <div className="events-box-1">

            <div className="events-box-1-card">
                <h3 className="events-box-1-h3">Event category</h3>
                <select className="events-box-1-sel" id="">
                    <option value="">all themes</option>
                </select>
            </div>


            <div className="events-box-1-card">
                <h3 className="events-box-1-h3">Sort by</h3>
                <select className="events-box-1-sel" id="">
                    <option value="">newest</option>
                </select>
            </div>


            <div className="events-box-1-card">
                <h3 className="events-box-1-h3">Show</h3>
                
                <div className="events-box-1-div-select">
                    <p>9</p>
                    <img src={Select} alt="" />
                </div>

                <h3 className="events-box-1-h3-2">events per page</h3>
            </div>


            <div>
                <input className="events-box-1-inp" type="text" placeholder="Search event..." />
                <img className="events-box-1-inp-img" src={Search} alt="" />
            </div>


            <div className="events-box-1-card">
                <img src={Palki} alt="" />
                <img src={Kvadrat} alt="" />
            </div>

          </div>




          <div className="card-list">

<div className="card">
    <h2 className="card-date">05 Aug </h2>
    <h4 className="card-time">11:00 – 14:00</h4>
    <h3 className="card-information">Formation of the organizational structure of the company in the face of uncertainty.</h3>
    <h4 className="online-sub">Onine master-class</h4>

    <button className="view-more-btn">View more</button>
</div>


<div className="card">
    <h2 className="card-date">24 Jul </h2>
    <h4 className="card-time">11:00 – 12:30</h4>
    <h3 className="card-information">Building a customer service department. Best Practices.</h3>
    <h4 className="online-sub">Onine lecture</h4>

    <button className="view-more-btn">View more</button>
</div>


<div className="card">
    <h2 className="card-date">16 Jul </h2>
    <h4 className="card-time">10:00 – 13:00</h4>
    <h3 className="card-information">How to apply methods of speculative design in practice. Worldbuilding prototyping.</h3>
    <h4 className="online-sub">Onine  workshop</h4>

    <button className="view-more-btn">View more</button>
</div>


<div className="card">
    <h2 className="card-date">10 Jul </h2>
    <h4 className="card-time">9:00 – 14:00</h4>
    <h3 className="card-information">Find and evaluate: search and assessment tools for candidates.</h3>
    <h4 className="online-sub">Onine workshop</h4>

    <button className="view-more-btn">View more</button>
</div>


<div className="card">
    <h2 className="card-date">27 Jun </h2>
    <h4 className="card-time">15:00 – 19:00</h4>
    <h3 className="card-information">Connection to Microsoft Excel and Google Sheets, Data Visualization in Power BI</h3>
    <h4 className="online-sub">Onine master-class</h4>

    <button className="view-more-btn">View more</button>
</div>


<div className="card">
    <h2 className="card-date">15 Jun </h2>
    <h4 className="card-time">11:00 – 12:00</h4>
    <h3 className="card-information">Marketing or growth hacking: main differences and what business needs</h3>
    <h4 className="online-sub">Onine  lecture</h4>

    <button className="view-more-btn">View more</button>
</div>


<div className="card">
    <h2 className="card-date">02 Jul </h2>
    <h4 className="card-time">11:00 – 13:00</h4>
    <h3 className="card-information">How to brief a client and present your design to approve it from the first show.</h3>
    <h4 className="online-sub">Onine  lecture</h4>

    <button className="view-more-btn">View more</button>
</div>


<div className="card">
    <h2 className="card-date">29 May </h2>
    <h4 className="card-time">11:00 – 12:00</h4>
    <h3 className="card-information">Who is a project manager and do I want to be PM?</h3>
    <h4 className="online-sub">Onine  lecture</h4>

    <button className="view-more-btn">View more</button>
</div>


<div className="card">
    <h2 className="card-date">18 May </h2>
    <h4 className="card-time">10:00 – 12:00</h4>
    <h3 className="card-information">The company's business page as an additional tool to support the announcement of vacancies.</h3>
    <h4 className="online-sub">Onine  lecture</h4>

    <button className="view-more-btn">View more</button>
</div>


<div className="page-list">
    <h3>1 </h3>
    <h3>2</h3>
    <h3>3</h3>
    <h3>4</h3>
    <img src={LineStroke} alt="" />
</div>
          </div>

<Main9 />
<Footer />


        </div>
      </>
    );
  }

  export default App;
