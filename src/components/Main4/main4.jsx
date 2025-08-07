import './main4.css';
import img13 from '../../../src/assets/img13.svg';
import img14 from '../../../src/assets/img14.svg';
import img15 from '../../../src/assets/img15.svg';
import img16 from '../../../src/assets/img16.svg';
import img17 from '../../../src/assets/img17.svg';

const Main4 = () => {
    return(
        <div className='sec-4'>
            <div className="benefits">
                <h2 className='h2'>Our benefits</h2>
                <h1>That’s how we do it</h1>
                <div className="only">
                    <div className="only-ban">
                        <button><img src={img13} alt="" /> Experienced Tutors</button>
                        <div className="only-box"><img src={img14} alt="" /> <p>Feedback & Support</p></div>
                        <div className="only-box"><img src={img15} alt="" /> <p>24/7 Online Library</p></div>
                        <div className="only-box"><img src={img16} alt="" /> <p>Community</p></div>
                    </div>
                </div>

                <div className="tutors">
                    <div className="tutors-text">
                        <h2>Only practicing tutors</h2>
                        <p>Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.</p>
                    </div>
                    <img src={img17} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Main4