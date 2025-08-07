import './blog.css';
import Files from "../../../src/assets/Files.png"
import Play from "../../../src/assets/Play.png"
import Mic from "../../../src/assets/mic.png"
import DownArrow from "../../../src/assets/DownArrow.png"
import Search from "../../../src/assets/search.png"
import FaceArt from "../../../src/assets/Face-Art.png"
import Line from "../../../src/assets/Line-Stroke.png"
import Laptop from "../../../src/assets/Laptop.png"
import HatMan from "../../../src/assets/HatMan.png"
import Keybord from "../../../src/assets/Keybord.png"
import ArtLamp from "../../../src/assets/Art-lamp.png"
import Finish from "../../../src/assets/Finish.png"
import Gorshok from "../../../src/assets/Gorshok.png"
import Printer from "../../../src/assets/Printer.png"
import LineStroke from "../../../src/assets/Line-Stroke.png"
import Builder from "../../../src/assets/Builder.png"
import Footer from '../Footer/footer';


const Blog = () => {

  return (
    <div className='Blog-sec'>

        <div className='blog-text-list'>
            <h4 className='blog-h4'>Our blog</h4>
            <h2 className='blog-h2'>Createx School Journal</h2>
        </div>




        <div className='blog-mini-cards-list'>

            <div className='blog-card-all'>
                <button className='blog-btn-all1'>all</button>
                <button className='blog-btn-all'><img src={Files} alt="" />  Articles</button>
                <button className='blog-btn-all'><img src={Play} alt="" />  Videos</button>
                <button className='blog-btn-all'><img src={Mic} alt="" />  Podcasts</button>
            </div>


            <div className='search-inp-themes'>
                <div className='blog-category-card'>
                <h4 className='blog-h4-category'>Blog category</h4>
                <div className='blog-card-themes'>
                    <h3 className='blog-h3-themes'>all themes</h3>
                    <img src={DownArrow} alt="" />
                </div>
            </div>


            <div className='search-container'>
                <input className='search-input' type="text" placeholder='Search blog...'/>
                <img className='serch-inp-img' src={Search} alt="" />
            </div>
            </div>

        </div>





        <div className='Art-card-list'>

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
            
               <img src={Laptop} alt="" />
            
               <div>
                <div>
                <p className="Desk-p">
                    Development | September 1, 2020
                </p>
                </div>
            
                <h3 className="Desk-h3">How to choose the first programming language for a beginner</h3>
            
                <h4 className="Desk-h4">
                   Turpis sed at magna laoreet gravida consequat tortor placerat. Gravida vitae aliquet enim egestas dui...
                </h4>
            
                <h4 className="Desk-h4-2">Read <img src={Line} alt="" /></h4>
               </div>

            </div>


            <div className="Art-card">
            
               <img src={HatMan} alt="" />
            
               <div>
                <div>
                <p className="Desk-p">
                    Design | August 8, 2020 | 40 min
                </p>
                </div>
            
                <h3 className="Desk-h3">Should you choose a creative profession if you are attracted to creativity?</h3>
            
                <h4 className="Desk-h4">
                    Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...
                </h4>
            
                <h4 className="Desk-h4-2">Watch <img src={Line} alt="" /></h4>
               </div>

            </div>


        </div>


            <div className='Art-card-list'>


                <div className="Art-card1">
            
               <img src={Keybord} alt="" />
            
               <div>
                <div>
                <p className="Desk-p">
                    HR & Recruting | August 3, 2020
                </p>
                </div>
            
                <h3 className="Desk-h3">HR statistics: job search,  interviews, hiring and recruiting</h3>
            
                <h4 className="Desk-h4">
                    Massa, lectus nibh consectetur aliquet nunc risus aenean. Leo hac netus bibendum diam adipiscing aenean nisl. Molestie nullam ante mattis ac sit vitae pellentesque mi etiam. Morbi commodo tempor, massa vivamus. A molestie id semper fermentum pretium...
                </h4>
            
                <h4 className="Desk-h4-2">Read <img src={Line} alt="" /></h4>
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


            </div>


        

        <div className='Art-card-list'>

            <div className="Art-card">
            
               <img src={Finish} alt="" />
            
               <div>
                <div>
                <p className="Desk-p">
                    Design | July 28, 2020 | 36 min
                </p>
                </div>
            
                <h3 className="Desk-h3">What are color profiles and how they work in graphic design</h3>
            
                <h4 className="Desk-h4">
                    Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...
                </h4>
            
                <h4 className="Desk-h4-2">Listen <img src={Line} alt="" /></h4>
               </div>

            </div>


            <div className="Art-card">
            
               <img src={Gorshok} alt="" />
            
               <div>
                <div>
                <p className="Desk-p">
                    Management | July 15, 2020 | 45 min
                </p>
                </div>
            
                <h3 className="Desk-h3">Startup: how to build a team that will live longer than a year</h3>
            
                <h4 className="Desk-h4">
                   Nisi, massa ut sit faucibus et diam. Faucibus at malesuada at justo scelerisque in nisi, urna...
                </h4>
            
                <h4 className="Desk-h4-2">Watch <img src={Line} alt="" /></h4>
               </div>

            </div>


            <div className="Art-card">
            
               <img src={Printer} alt="" />
            
               <div>
                <div>
                <p className="Desk-p">
                    Marketing | July 9, 2020
                </p>
                </div>
            
                <h3 className="Desk-h3">How to get customers to love your business from the start</h3>
            
                <h4 className="Desk-h4">
                    Malesuada in augue mi feugiat morbi a aliquet enim. Elementum lacus, pellentesque etiam arcu tristique ac...
                </h4>
            
                <h4 className="Desk-h4-2">Read <img src={Line} alt="" /></h4>
               </div>

            </div>


        </div>

        <div className="blog-list">
            <h3>1 </h3>
            <h3>2</h3>
            <h3>3</h3>
            <h3>4</h3>
            <img src={LineStroke} alt="" />
        </div>



        <div className='finish-ml'>
            <img src={Builder} alt="" />

            <div>
                <h2 className='best-articles'>Want to get the best articles weekly? Subscribe to our newsletter!</h2>

                <div className='inp-btn'>
                    <div className='search-container1'>
                    <input className='inp-subscribe' type="text" placeholder='Your working email'/>
                    </div>

                    <button className='btn-subscribe'>Subscribe</button>
                </div>

                <div className='inp-chek-div'>
                    <input className='inp-chek' type="checkbox"/>
                    <h5 className='inp-chek-h5'>I agree to receive communications from Createx Online School</h5>
                </div>
            </div>
        </div>


        <Footer />

    </div>
  );
};

export default Blog;
