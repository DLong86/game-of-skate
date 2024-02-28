import React, { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import useEasyTrick from "../hooks/useEasyTrick";
import useTrickData from "../hooks/useTrickData";

export default function WarmUp() {
  const [trickAttempts, setTrickAttempts] = useState(3);
  const [trick, setTrick] = useState("");
  const { data, loading, error } = useEasyTrick();
  const [trickList, setTrickList] = useTrickData();

  const [usedTricks, setUsedTricks] = useState([]);

  function getRandomTrick(tricks) {
    if (tricks.length === 0) {
      console.log("No more tricks available");
      return;
    }

    const randomIndex = Math.floor(Math.random() * tricks.length);
    const item = tricks[randomIndex];
    setTrick(item);
    setUsedTricks((prevUsedTricks) => [...prevUsedTricks, item]);
    const updatedTricks = tricks.filter((_, index) => index !== randomIndex);
    setTrickList(updatedTricks);
  }

  const options = [
    { value: "", text: "--Choose an option--" },
    { value: 3, text: "3 Attempts" },
    { value: 5, text: "5 Attempts" },
    { value: 7, text: "7 Attempts" },
    { value: 10, text: "10 Attempts" },
    { value: 15, text: "15 Attempts" },
    { value: 25, text: "25 Attempts" },
  ];

  const handleChange = (event) => {
    setTrickAttempts(event.target.value);
  };

  let numberOfTricks = 6;

  const handleNextTrick = () => {
    numberOfTricks -= 1;
    if (numberOfTricks === 0) {
      console.log("You got them all! Nice!");
      return;
    } else if (numberOfTricks > 0) {
      console.log(`${numberOfTricks} tricks remaining`);
      getRandomTrick(trickList);
    }
  };

  return (
    <div>
      <div className="">
        <h1>Let's Get Physical</h1>
        <p>Select how many times you want to practice each trick</p>
        <p>
          If you miss, start again from zero. If you land all - move on to the
          next trick.
        </p>
      </div>
      <div className="">
        <select value={trickAttempts} onChange={handleChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </div>
      <div className="">
        <button onClick={handleNextTrick}>
          Next Trick
          <FaAngleRight />
        </button>
      </div>
      <div className="">
        <h1>{trick}</h1>
      </div>
    </div>
  );
}
