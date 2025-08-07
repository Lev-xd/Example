import './main2.css';
import img5 from '../../../src/assets/img5.svg';
import img6 from '../../../src/assets/img6.svg';


const Main2 = () => {
    return(
        <div className='sec-2'>
            <div className="createx">
                <img src={img5} alt="" />
                <div className="createx-box">
                    <h2>Who we are</h2>
                    <h1>Why Createx?</h1>
                    <div className="chekbox">
                        <img src={img6} className="image-1" />
                        <p>A fermentum in morbi pretium aliquam adipiscing donec tempus.</p>
                    </div>

                    <div className="chekbox">
                        <img src={img6} alt="" />
                        <p>Vulputate placerat amet pulvinar lorem nisl.</p>
                    </div>

                    <div className="chekbox">
                        <img src={img6} alt="" />
                        <p>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</p>
                    </div>

                    <div className="chekbox">
                        <img src={img6} alt="" />
                        <p>Etiam duis lobortis in fames ultrices commodo nibh.</p>
                    </div>

                    <div className="chekbox">
                        <img src={img6} alt="" />
                        <p>Tincidunt sagittis neque sem ac eget.</p>
                    </div>

                    <div className="chekbox">
                        <img src={img6} alt="" />
                        <p>Ultricies amet justo et eget quisque purus vulputate dapibus tortor.</p>
                    </div>

                    <button>More about us</button>
                </div>
            </div>
        </div>
    )
}

export default Main2