import { Link } from "react-router-dom";

function Logo() {

  return (
    <div className="logo" >
        <div className="logo-text-container" >
          {/* <Link to="/"> */}
            <p className="logo-initial initial-e">E</p>
            <p className="logo-hide logo-hide-ve">ve &nbsp;</p>
            <p className="logo-initial initial-j">J</p>
            <p className="logo-hide logo-hide-uneau">uneau</p>
          {/* </Link> */}
        </div>
    </div>
  );
}

export default Logo;
