import "../stylesheets/Navbar.css";

function Navbar() {
  return (
    <nav>
      <a href="#home" className="Logo">
        FR
      </a>
      <section className="Links-Section">
        <ul>
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </section>
      <section>
        <button className="Mail-Button Nav-Buttons">Let's Talk!</button>
      </section>
    </nav>
  );
}

export default Navbar;
