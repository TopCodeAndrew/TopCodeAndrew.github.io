import React from 'react';
import githubIcon from '../images/github-icon.png';
import linkedInIcon from '../images/linkedIn-icon.png';
import calendarIcon from '../images/calendar-icon.png';
import emailIcon from '../images/email-icon.png';


export default function ContactBar() {

    const openNewTab = (url) => {
        const win = window.open(`${url}`, "_blank");
        win.focus();
    }

    const subject = "Hey Andrew... let's connect!"

    const newEmail = () => {
        window.open(`mailto:andrewjsuccess@gmail.com?subject=${subject}`)
    }

    return (
        <div className="contactBar">
            <div className='button-box'>
                <div className='img-box' onClick={() => openNewTab('https://www.linkedin.com/in/andrewsmithutah/')}>
                    <img src={linkedInIcon} alt='sidebar-img' />
                    <div className='popout' onClick={() => openNewTab('https://www.linkedin.com/in/andrewsmithutah/')}>LinkedIn</div>
                </div>
                <div className='img-box' onClick={() => newEmail()}>
                    <img className='round' src={emailIcon} alt='sidebar-img' />
                    <div className='popout' onClick={() => newEmail()}> Email </div>
                </div>
                <div className='img-box' onClick={() => openNewTab('https://github.com/TopCodeAndrew')}>
                    <img src={githubIcon} alt='sidebar-img' />
                    <div className='popout' onClick={() => openNewTab('https://github.com/TopCodeAndrew')}> Github</div>
                </div>
                <div className='img-box' onClick={() => openNewTab('https://calendly.com/andrewjsuccess/30min')}>
                    <img className='round' src={calendarIcon} alt='sidebar-img' />
                    <div className='popout' onClick={() => openNewTab('https://calendly.com/andrewjsuccess/30min')}> Book Call </div>
                </div>
            </div>
        </div>
    );
}

