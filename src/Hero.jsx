export const Hero = () => (
    <section className="hero">
        <div className="hero-inner">
            <p className="hero-text">I am Jeanette Wiktorsson</p>
            <h1>Frontend Developer</h1>
            <div className="hero-bio">
                <img className="hero-profile-pic" src="/profile_round.png" alt="Jeanette Wiktorsson" />
                <p className="hero-presentation">I am a frontend developer with a background as a PLM Engineer. With +15 years of experience in engineering, method development and design, I am now focusing on building modern, user-friendly web interfaces. I´m currently developing my skills with HTML, CSS, JavaScript, React and modern workflows to turn ideas into clean, responsive UI.</p>
            </div>
        </div>
        <div className="hero-arrow" aria-hidden="true">
            <img src="/public/arrow.svg" alt="down arrow" />
        </div>
    </section>
)