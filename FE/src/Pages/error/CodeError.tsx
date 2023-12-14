import { FC } from "react";
import "./css/style.css";

interface iError {
  error: any;
}

const CodeError: FC<iError> = ({ error }) => {
  return (
    <body>
      <div id="notfound">
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
          <div className="text-white mb-5">{error.message}</div>
          <a href="#">home page</a>
        </div>
      </div>
    </body>
  );
};

export default CodeError;
