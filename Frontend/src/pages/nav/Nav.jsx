import { Fragment } from "react";
import "./nav.scss";

const Nav = () => {
  return (
    <Fragment>
      <div className="nav-items">
        {/* for top left nav items */}
        <div className="left-items">
          <ul>
            <li>Markets</li>
            <li>Partners</li>
          </ul>
        </div>
        {/* for top right nav items */}
        <div className="right-items">
          <button>Learn</button>
          <button>Connect</button>
        </div>
      </div>
    </Fragment>
  );
};
export default Nav;
