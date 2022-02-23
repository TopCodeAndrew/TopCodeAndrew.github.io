import changeLaptop from '../images/change-squared-laptop.png'
import modofloLaptop from '../images/modoflo-laptop.png'
import lemonLaptop from '../images/lemonprop-laptop.png'

import adobe from '../images/tech-icons/adobe.png';
import css from '../images/tech-icons/css.png';
import github from '../images/tech-icons/github.png';
import heroku from '../images/tech-icons/heroku.png';
import html from '../images/tech-icons/html.png';
import javascript from '../images/tech-icons/javascript.png';
import node from '../images/tech-icons/node.png';
import postman from '../images/tech-icons/postman.png';
import postgresql from '../images/tech-icons/postgresql.png';
import react from '../images/tech-icons/react.png';
import redux from '../images/tech-icons/redux.png';
import eye from '../images/eye-icon.png';


export default function SkillsExperience() {
    let fakeH2 = '< h2 >'
    let fakeEndH2 = '< /h2 >'

    const openNewTab = (url) => {
        const win = window.open(`${url}`, "_blank");
        win.focus();
    }

    return (
        <div className="skillsExperience" id='skillsExperience'>
            {/* <span className='line-box'>
                <div className='separating-line'></div>
            </span> */}

            <span className='main-box'>
                <p className='fakeCode'> {fakeH2}</p>
                <h2>skills & experience</h2>
                <p className='fakeCode'> {fakeEndH2}</p>
            </span>

            <span className='master-content-box'>
                <span className='projects-box'>
                    <span className='single-project-box'>
                        <img alt='laptop-img' src={modofloLaptop} />
                        <span className='description-box'>
                            <div className='title'>
                                <h3>modoflo.com</h3>
                                <div className='icons'>
                                    <img src={eye} alt='eye-icon' onClick={() => openNewTab('https://modoflo.com/#/')} />
                                    <img className='git' src={github} alt='github-icon' onClick={() => openNewTab('https://github.com/TopCodeAndrew/MoDoFlo')} />
                                </div>
                            </div>
                            <p> Originally designed to assist Andrew to easily use the popular Pomodoro productivity technique, modoflo is now available to anyone on the web. <br></br> <br></br>
                            Features:<br></br>
                                <ol>
                                    <li>-  Full authentication functionality</li>
                                    <li>-  Use of redux to store user details</li>
                                    <li>-  Database integration tracks progress on projects</li>
                                    <li>-  Stripe integration to accept donations</li>
                                </ol>
                            </p>
                        </span>
                    </span>
                    <span className='line-box'>
                        <div className='separating-line'></div>
                    </span>
                    <span className='single-project-box'>
                        <img alt='laptop-img' src={changeLaptop} />
                        <span className='description-box'>
                            <div className='title'>
                                <h3>Change-Squared</h3>
                                <img className='git' src={github} alt='github-icon' onClick={() => openNewTab('https://github.com/TopCodeAndrew/noDBproject')} />
                            </div>
                            <p> Change-Squared is a simple, easy-to-use styling editor. A personal challenge in this project was to create it without using any redux to store variables, resulting in more complicated prop-drilling.<br></br> <br></br>
                            Features:<br></br>
                                <ol>
                                    <li>-  Creating and editing 4-sided shapes</li>
                                    <li>-  Ability to name shapes (hidden feature)</li>
                                    <li>-  Data manipulation without redux</li>
                                </ol>
                            </p>
                        </span>
                    </span>
                    <span className='line-box'>
                        <div className='separating-line'></div>
                    </span>
                    <span className='single-project-box'>
                        <img alt='laptop-img' src={lemonLaptop} />
                        <span className='description-box'>
                            <div className='title'>
                                <h3>LemonProp.com</h3>
                                <div className='icons'>
                                    <img src={eye} alt='eye-icon' onClick={() => openNewTab('https://lemonprop.com/#/')} />
                                    <img className='git' src={github} alt='github-icon' onClick={() => openNewTab('https://github.com/Lemon-Prop-Management/lemon-prop')} />
                                </div>
                            </div>
                            <p> LemonProp.com is the property management software created for a hypothetical company, "LemonProp Management". As the lead developer for this project, Andrew participated first-hand in guiding his team through agile software development practices. <br></br> <br></br>
                            Features:<br></br>
                                <ol>
                                    <li>-  Extensive use of authentication middleware</li>
                                    <li>-  Tracks tenants, payments, and maintenance requests for all properties</li>
                                    <li>-  Ability for tenants to pay rent online</li>
                                </ol>
                            </p>
                        </span>
                    </span>
                </span>

                <span className='images-box'>
                    <div className='logo-box'>
                        <p>JavaScript</p>
                        <img alt='tech-logo-img' src={javascript} />
                    </div>
                    <div className='logo-box'>
                        <p>HTML5</p>
                        <img alt='tech-logo-img' src={html} />
                    </div>
                    <div className='logo-box'>
                        <p>CSS3</p>
                        <img alt='tech-logo-img' src={css} />
                    </div>
                    <div className='logo-box'>
                        <p>GitHub</p>
                        <img alt='tech-logo-img' src={github} />
                    </div>
                    <div className='logo-box'>
                        <p>React.js</p>
                        <img alt='tech-logo-img' src={react} />
                    </div>
                    <div className='logo-box'>
                        <p>Redux</p>
                        <img alt='tech-logo-img' src={redux} />
                    </div>
                    <div className='logo-box'>
                        <p>Node.js</p>
                        <img alt='tech-logo-img' src={node} />
                    </div>
                    <div className='logo-box'>
                        <p>PostgreSQL</p>
                        <img alt='tech-logo-img' src={postgresql} />
                    </div>
                    <div className='logo-box'>
                        <p>Heroku</p>
                        <img alt='tech-logo-img' src={heroku} />
                    </div>
                    <div className='logo-box'>
                        <p>Adobe</p>
                        <img alt='tech-logo-img' src={adobe} />
                    </div>
                    <div className='logo-box'>
                        <p>Postman</p>
                        <img alt='tech-logo-img' src={postman} />
                    </div>
                </span>
            </span>



        </div >
    );
}