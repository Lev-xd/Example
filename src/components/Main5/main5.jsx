import './main5.css';


const Main5 = () => {
    return (
        <div className='bag'>
            <h2 className='h2-bag'>Our Events</h2>
            <h1 className='h1-bag'>Lectures & workshops</h1>
            <div className="baner">
                <div className="box">
                    <h2>05</h2>
                    <div className="num">
                        <h3>August </h3>
                        <div className="num-box">
                           <h4>11:00</h4> <h5>– 14:00 </h5> 
                        </div>
                        
                    </div>
                    <div className="num2">
                        <h6>Formation of the organizational structure of the company in the face of uncertainty.</h6>
                        <p>Onine master-class</p>
                    </div>
                    <button>View more</button>
                </div>
                <div className="box">
                      <h2>24</h2>
                    <div className="num">
                        <h3>July</h3>
                        <div className="num-box">
                           <h4>11:00</h4> <h5>– 12:30 </h5> 
                        </div>
                        
                    </div>
                    <div className="num2">
                        <h6>Building a customer service department. Best Practices.</h6>
                        <p>Onine lecture</p>
                    </div>
                    <button>View more</button>
                </div>
                <div className="box">
                    <h2>16</h2>
                    <div className="num">
                        <h3>July</h3>
                        <div className="num-box">
                           <h4>10:00</h4> <h5>– 13:00 </h5> 
                        </div>
                        
                    </div>
                    <div className="num2">
                        <h6>How to apply methods of speculative design in practice. Worldbuilding prototyping.</h6>
                        <p>Onine workshop</p>
                    </div>
                    <button>View more</button>
                </div>
                <div className="bx">
                    <h1>Do you want more?</h1>
                    <button>Explore all events</button>
                </div>
            </div>
        </div>
    )
}

export default Main5;