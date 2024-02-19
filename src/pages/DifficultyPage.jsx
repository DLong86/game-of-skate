import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function DifficultyPage({ onDifficultyChange, difficulty }) {
  return (
    <div className="flex flex-row">
      <Button
        text="chill"
        value="chill"
        onClick={(e) => onDifficultyChange(e.target.value)}
      />
      <Button
        text="challenge"
        value="challenge"
        onClick={(e) => onDifficultyChange(e.target.value)}
      />
      <Button
        text="hard"
        value="hard"
        onClick={(e) => onDifficultyChange(e.target.value)}
      />
      <Link to="/home">Enter</Link>
    </div>
  );
}
