import about from '/about.jpg'
const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-img">
                        <img src={about} alt="" />
                    </div>
                    <div className="about-text">
                        <h2>Who are We?</h2>
                        <p>Consectetur adipisicing elit. Voluptatum, vitae doloribus culpa corrupti quae ad necessitatibus eum vel quidem expedita quaerat non consequuntur, cumque minus est maiores laudantium magnam! Exercitationem tempore atque excepturi, delectus optio natus nostrum.</p>
                        <h2>A message from Our Co-Founder</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad deserunt earum, delectus tenetur accusamus ex. Quasi, perspiciatis sed? Unde explicabo commodi suscipit vel in dolores cupiditate exercitationem ipsam illum veritatis?</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
