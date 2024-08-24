import './MostPopulaire.css'
import pop_01 from '../../imgs/images/popular-01.jpg'
export default function MostPopulaire() {
    return (
        <div className='section-wrapper'>
            <div className="section-header">
                <h4>Most Populaire</h4>
            </div>
            <div className="most-populaire-items">
                <div className="most-populaire-item">
                    <div className="card-wrapper">
                        <img className='most-populaire-item-img' src={pop_01} alt="pop" />
                        <div className="most-populaire-item-content">
                            <h4 className='most-populaire-item-title'>Fortnite
                                <br />
                                <span>SandBox</span>
                            </h4>
                            <ul>
                                <li><span>4.8</span></li>
                                <li><span>2.3M</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="most-populaire-item">
                    <div className="card-wrapper">
                        <img className='most-populaire-item-img' src={pop_01} alt="pop" />
                        <div className="most-populaire-item-content">
                            <h4 className='most-populaire-item-title'>Fortnite
                                <br />
                                <span>SandBox</span>
                            </h4>
                            <ul>
                                <li><span>4.8</span></li>
                                <li><span>2.3M</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="most-populaire-item">
                    <div className="card-wrapper">
                        <img className='most-populaire-item-img' src={pop_01} alt="pop" />
                        <div className="most-populaire-item-content">
                            <h4 className='most-populaire-item-title'>Fortnite
                                <br />
                                <span>SandBox</span>
                            </h4>
                            <ul>
                                <li><span>4.8</span></li>
                                <li><span>2.3M</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="most-populaire-item">
                    <div className="card-wrapper">
                        <img className='most-populaire-item-img' src={pop_01} alt="pop" />
                        <div className="most-populaire-item-content">
                            <h4 className='most-populaire-item-title'>Fortnite
                                <br />
                                <span>SandBox</span>
                            </h4>
                            <ul>
                                <li><span>4.8</span></li>
                                <li><span>2.3M</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}