import './Hero.css'
const Hero = () => {
    return (
        <div className='hero-main'>
            <div className='hero-text'>
                <h6 className='hero-subtitle'>Welcom  to our website</h6>
                <h4 className='hero-title'><em>Browse</em> Our populaire gqmes</h4>
                <div className="main-button">
                    <a href="browse">Browse Now</a>
                </div>
            </div>
        </div>
    )
}

export default Hero