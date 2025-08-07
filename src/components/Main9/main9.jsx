import "./main9.css"
import Illus from "../../../src/assets/illustration.png"


function App() {

  return (
    <>
      <div className="sec9">
        <img src={Illus} alt="" />

<div className="Sub-card">

<h4 className="Miss-h4">Don’t miss anything</h4>
<h1 className="Subscribe-h1">Subscribe to the Createx School announcements</h1>

<div className="Email-box">
<input className="Email-inp" type="text" placeholder="Your working email"/>
<button className="Sub-btn">Subscribe</button>
</div>

</div>

        <img src={Illus} alt="" />
      </div>
    </>
  )
}

export default App;