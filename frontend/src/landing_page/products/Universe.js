import React from "react";
import { Link } from "react-router-dom";


function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="fs-3 text-muted mt-5">The Zerodha Universe</h1>
        <p className="mt-4">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" />
          <p className="mt-4">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" style={{ width: "35%" }} />
          <p className="mt-4">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" style={{ width: "60%" }} />
          <p className="mt-4">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "50%" }}
          />
          <p className="mt-4">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={{ width: "35%" }} />
          <p className="mt-4">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" style={{ width: "50%" }} />
          <p className="mt-4">Bonds trading platform</p>
        </div>
        <Link
          to="/signup"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mb-5 mt-4 p-2 btn btn-primary fs-5"
          style={{
            width: "20%",
            margin: "0 auto",
            backgroundColor: "#387ed1",
            color: "white",
            textDecoration: "none",
          }}
        >
          Signup Now
        </Link>
      </div>
    </div>
  );
}

export default Universe;
