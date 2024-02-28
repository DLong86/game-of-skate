import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export default function Home() {
  return (
    <div>
      <h1>WELCOME</h1>
      <h3>Skateboarding App</h3>
      <p>
        App to help you warm-up with, or to test your S-K-A-T-E Game against the
        AI.
      </p>
      <div className="flex flex-row">
        <Link to="/warm-up">
          <Button text="Warm-up" />
        </Link>
        <Button text="S.K.A.T.E" />
      </div>
      <Link to="/">
        <IoIosArrowBack />
        Back
      </Link>
    </div>
  );
}
