export default function About() {
  let fakeH2 = "< h2 >";
  let fakeEndH2 = "< /h2 >";
  let fakeP = "< p >";
  let fakeEndP = "< /p >";
  return (
    <div className="about" id="about">
      {/* <span className='line-box'>
                <div className='separating-line'></div>
            </span> */}
      <div className="main-box">
        <p className="fakeCode"> {fakeH2}</p>
        <h2>about</h2>
        <p className="fakeCode"> {fakeEndH2}</p>
      </div>
      <div className="content-box">
        <p className="fakeCode"> {fakeP}</p>
        <p className="paragraph">
          Hi there! <br></br>
          <br></br>
          My name is Andrew Smith - I'm a Utah-based React developer that is
          passionate about quality applications that add value to people's
          lives.<br></br>
          <br></br>
          When I am not coding, you can find me researching productivity hacks,
          leading worship at my church, testing new beard products, playing
          volleyball, and attempting to be the best husband and dad that I can
          be.<br></br>
          <br></br>
          Although my primary focus is on React, I have experience with Node.js,
          PostgreSQL, and much more. I am constantly pushing myself to
          continually learn!<br></br>
          <br></br>
          Feel free to reach out, even if just to say "hi"! I would love to
          connect with you!
        </p>
        <p className="fakeCode"> {fakeEndP}</p>
      </div>
    </div>
  );
}
