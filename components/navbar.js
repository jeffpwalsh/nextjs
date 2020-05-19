import Link from "next/link";

//NAVBAR COMPONENT WITH PAGE LINKS
const Navbar = () => (
  <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark ">
    <a className="navbar-brand" href="/">
      Jeff
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div id="navbarNav">
      <ul className="navbar-nav">
        {/* LINKS TO PAGES */}
        <li className="nav-item">
          <Link href="/about">
            <a className="nav-link" href="#">
              About
            </a>
          </Link>
        </li>
        {/* LINKS TO PAGES */}
        <li className="nav-item">
          <Link href="/projects">
            <a className="nav-link" href="#">
              Projects
            </a>
          </Link>
        </li>
        {/* LINKS TO PAGES */}
        <li className="nav-item">
          <Link href="/contact">
            <a className="nav-link" href="#">
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
