import { Link } from "react-router-dom";

const Navbarq = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="title">
            <Link to="/">Photo Application</Link>
          </div>
          <div className="paths">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbarq;
