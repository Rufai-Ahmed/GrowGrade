import { useLocation } from "react-router-dom";
import "./css/style.css";

const RouteError = () => {
  const { pathname } = useLocation();

  return (
    <body>
      <div id="notfounded">
        <div id="notfound">
          <div id="notfound-404">
            <h1>
              4<span>0</span>4
            </h1>
          </div>
          <p>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <div className="text-white mb-5 ">{pathname} does not exist</div>
          <a href="#">home page</a>
        </div>
      </div>
    </body>
  );
};

export default RouteError;
