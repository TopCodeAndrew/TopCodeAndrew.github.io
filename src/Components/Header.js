import React, { useState } from 'react';
import hamburger from '../images/hamburger.png';
import { Link } from 'react-scroll';



export default function Header() {

    const [menuToggle, setMenuToggle] = useState(false)

    function toggleOpen() {
        setMenuToggle(!menuToggle);
        console.log(menuToggle)
    }

    return (
        <div className="header">
            <div className='desktop'>
                <span className='item-box'>
                    <Link
                        className='link-box'
                        activeClass="active"
                        to="landing"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        <p className='header-item'>Home</p>
                    </Link>
                    <Link
                        className='link-box'
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                        <p className='header-item'>About</p>
                    </Link>
                    <Link
                        className='link-box'
                        activeClass="active"
                        to="skillsExperience"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        <p className='header-item'>Experience</p>
                    </Link>
                </span>
            </div>
            <div className='mobile'>
                <img
                    className='hamburger'
                    src={hamburger}
                    onClick={toggleOpen}
                    alt='hamburger-icon' />

                <div className='drop-down-container'>{menuToggle ? <div className='drop-down'>
                    <Link
                        className='link-box'
                        activeClass="active"
                        to="landing"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        onClick={(() => toggleOpen())}>
                        <p className='header-item'>Home</p>
                    </Link>
                    <Link
                        className='link-box'
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        onClick={(() => toggleOpen())}>
                        <p className='header-item'>About</p>
                    </Link>
                    <Link
                        className='link-box'
                        activeClass="active"
                        to="skillsExperience"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        onClick={(() => toggleOpen())}>
                        <p className='header-item'>Experience</p>
                    </Link>
                    <Link
                        className='link-box'
                        activeClass="active"
                        to="contactBottom"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        onClick={(() => toggleOpen())}>
                        <p className='header-item'>Contact</p>
                    </Link>
                </div>
                    :
                    null}
                </div>
            </div>
        </div >
    );
}

//create the state to know if it should be visible
//create a function that changes that state
//create a function that returns 'show' if state is true, and 'hide' if state is false
//put that function next to 'drop-down' in the drop-down div
//in css, put the 'show' and 'hide' properties as a sibling of 'drop-down'