import React, { useState, useEffect } from "react";
import "./FreePlay.css";
import Menu from "../Menu/Menu";
import axios from "axios";
//custom hook
import useInputState from "../hooks/useInputState";

function FreePlay(props) {
  const [category, setCategory] = useState([]);
  const [topic, handleTopic, resetTopic] = useInputState("");
  const [difficulty, handleDifficulty, resetDifficulty] = useInputState("");
  const getCategory = () => {
    axios.get("https://opentdb.com/api_category.php").then(res => {
      setCategory(res.data.trivia_categories);
    });
  };
  useEffect(() => {
    getCategory();
  }, []);
  console.log(category);
  return (
    <div className="showcase">
      <Menu />
    </div>
  );
}

export default FreePlay;
