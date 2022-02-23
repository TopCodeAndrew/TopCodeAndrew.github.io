import React from 'react';
import githubIcon from '../images/github-icon.png';
import linkedInIcon from '../images/linkedIn-icon.png';
import calendarIcon from '../images/calendar-icon.png';
import emailIcon from '../images/email-icon.png';


export default function ContactBottom() {
    let fakeH2 = '< h2 >'
    let fakeEndH2 = '< /h2 >'


    const openNewTab = (url = '192.168.1.109:3000') => {
        window.open(`${url}`);
        // win.focus();
    }

    const subject = "Hey Andrew... let's connect!"

    const newEmail = () => {
        window.open(`mailto:andrewjsuccess@gmail.com?subject=${subject}`)
        // &body=Body%20goes%20here')
    }

    return (
        <div className="contactBottom" id='contactBottom'>

            <div className='main-box'>
                <p className='fakeCode'> {fakeH2}</p>
                <h2>contact me</h2>
                <p className='fakeCode'> {fakeEndH2}</p>
            </div>

            <div className='button-box'>

                <div className='column-box'>
                    <div className='img-box' onClick={() => openNewTab('https://www.linkedin.com/in/andrewsmithutah/')}>
                        <div className='popout'> LinkedIn</div>
                        <img src={linkedInIcon} alt='contact-bottom-img' />
                    </div>
                    <div className='img-box' onClick={() => newEmail()}>
                        <div className='popout'> Email </div>
                        <img className='round' src={emailIcon} alt='contact-bottom-img' />
                    </div>
                </div>

                <div className='column-box'>
                    <div className='img-box' onClick={() => openNewTab('https://github.com/TopCodeAndrew')}>
                        <div className='popout'> Github</div>
                        <img src={githubIcon} alt='contact-bottom-img' />
                    </div>
                    <div className='img-box' onClick={() => openNewTab('https://calendly.com/andrewjsuccess/30min')}>
                        <div className='popout'> Book Call </div>
                        <img className='round' src={calendarIcon} alt='contact-bottom-img' />
                    </div>
                </div>
            </div>
        </div>
    );
}

