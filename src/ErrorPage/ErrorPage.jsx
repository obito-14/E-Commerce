import { Link } from "react-router-dom";
import "./ErrorPage.css";
const ErrorPage = () => {
  return (
    <div>
      <img
        className="ErrorImg"
        src="https://assets.materialup.com/uploads/c13818e8-9e42-4f4d-b657-38743a81b270/preview.gif"
      />
      <Link to={"/"}>
        <button className="ErrorBtn">Go Back To Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
