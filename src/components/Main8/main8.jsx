import "./main8.css"
import FaceArt from "../../../src/assets/Face-Art.png"
import Line from "../../../src/assets/Line-Stroke.png"
import ArtLamp from "../../../src/assets/Art-lamp.png"
import ArtHat from "../../../src/assets/Art-hat.png"


function App() {

  return (
    <>
      <div className="sec8">

      <div className="Blog-list">
        <div>
      <h3 className="Blog-text">Our blog</h3>
      <h4 className="Posts-text">Latest posts</h4>
      </div>

      <button className="Blog-btn">Go to blog</button>
      </div>

      <div className="Art-card-list">

<div className="Art-card">

   <img src={FaceArt} alt="" />

   <div>
    <div>
    <p className="Desk-p">
        Marketing | September 4, 2020 | 36 min
    </p>
    </div>

    <h3 className="Desk-h3">What is traffic arbitrage and does it really make money?</h3>

    <h4 className="Desk-h4">
        Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...
    </h4>

    <h4 className="Desk-h4-2">Listen <img src={Line} alt="" /></h4>
   </div>
</div>




<div className="Art-card">

   <img src={ArtLamp} alt="" />

   <div>
    <div>
    <p className="Desk-p">
        Management | August 25, 2020 | 45 min
    </p>
    </div>

    <h3 className="Desk-h3">What to do and who to talk to if you want to get feedback on the product</h3>

    <h4 className="Desk-h4">
        Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus...
    </h4>

    <h4 className="Desk-h4-2">Watch <img src={Line} alt="" /></h4>
   </div>
</div>



<div className="Art-card">

   <img src={ArtHat} alt="" />

   <div>
    <div>
    <p className="Desk-p">
        Design | August 8, 2020
    </p>
    </div>

    <h3 className="Desk-h3">Should you choose a creative profession if you are attracted to creativity?</h3>

    <h4 className="Desk-h4">
        Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...
    </h4>

    <h4 className="Desk-h4-2">Read <img src={Line} alt="" /></h4>
   </div>
</div>

      </div>

      </div>
    </>
  )
}

export default App;