export const Hero = () => (
    <section className="hero">
        <div className="hero-inner">
            <div className="hero-top">
                <p className="hero-intro">I am Jeanette Wiktorsson</p>
                <h1>Frontend Developer</h1>
            </div>

            <div className="hero-content">
                <div className="hero-img-container">
                    <img className="hero-profile-pic" src="/profile_round.png" alt="Jeanette Wiktorsson" />
                </div>

                <p className="hero-presentation">I am a frontend developer with a background as a PLM Engineer. With +15 years of experience in engineering, method development and design, I am now focusing on building modern, user-friendly web interfaces. I´m currently developing my skills with HTML, CSS, JavaScript, React and modern workflows to turn ideas into clean, responsive UI.</p>
            </div>
        </div>

        <img className="hero-arrow" aria-hidden="true" src="/arrow.svg" alt="down arrow" />
    </section>
)