import "./NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="NotFound">
      <p >You broke me - Page not found.</p>
      <Link to="/">Home</Link>
    </div>
  );
}

export default NotFound;
