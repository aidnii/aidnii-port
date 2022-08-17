import headerImgR from "../assets/img/header-img-rd.svg";

export const About = () => {
    return (
        
        <section className="about" id="about">
            
            <h2>about me</h2>
            <div className="container">
                <div className="about-img">
                    <img src={headerImgR}></img>
                </div>
                <div className="text-wrapper">
                    <h4>I'm kryptic lady (she/her)</h4>
                    <h5>A <span>self-taught</span> Blockchain Developer <span>based in USA</span> (for now)</h5>
                    <p>I'm a self-taught Blockchain Developer. I've been in the blockchain and crypto space since 2019 and love everything about it!
                        My background is in Mechanical Engineering with over 5 years of experience. However, I decided to go full-time into Blockchain and 
                        Crypto back in 2019. I'm also a Crypto enthusiast! 
                    </p>
                    <a href="https://calendly.com/krypticlady/30min" className='btn' target='_blank'>let's collab!</a>
                </div>
            </div>
        </section>
    )
}