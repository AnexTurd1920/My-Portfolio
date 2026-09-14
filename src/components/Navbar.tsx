import { IconLanguage } from "@tabler/icons-react";
import "../stylesheets/Navbar.css";
function Navbar() {
  return (
    <nav>
      <section>
        <button className='Language-Icon'>
          <IconLanguage size={24} />
        </button>
      </section>
      <section className='Links-Section'>
        <ul>
          <li>
            <a href=''>Home</a>
          </li>
          <li>
            <a href=''>Services</a>
          </li>
          <li>
            <a href=''>Skills</a>
          </li>
        </ul>
      </section>
      <section>
        <button>Let's Talk!</button>
      </section>
    </nav>
  );
}

export default Navbar;
