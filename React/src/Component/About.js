import React from 'react'
import Detailslist from './Detailslist';
import { faUserCheck} from '@fortawesome/free-solid-svg-icons'
import Heading from './Heading';
function About()
{
    return(
        <>
            <section id="About">
            <div className="container-fluid">
                <div className="row p-5 d-flex align-items-center justify-content-center">
                    <div className="col-lg-12 col-md-12 ">
                        <div className="resume box">
                        <Heading icon={faUserCheck} head="About"/>
                            <p className="para2"> Extremely motivated to constantly develop my skills and grow professionally. I
                                am confident in
                                my ability to come up with interesting ideas and to convert them into Digital Reality</p>
                        </div>
                        <div className="about2">
                            <h3>.Net Developer</h3>
                            <ul className="details">
                                <Detailslist />
                                
                            </ul>
                            <p>I am Undergraduate <b>Software Engineer</b> at <b>Bahria University karachi Campus</b>.
                                Currently I am in
                                my <b>3<sup>rd</sup></b> year of University. Till now I have secured <b>3.2</b> CGPA.
    
                            </p>
                        </div>
                    </div>
                </div>
            </div>         
        </section> 
        </>
    );
}
export default About;