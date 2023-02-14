import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");

  const navigate = useNavigate();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e);
    navigate("/result");
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <label>
        <span>Name</span>
        <input name="name" />
      </label>
      <label>
        <span>Birth</span>
        <input name="birth" />
      </label>
      <input type="submit" />
    </form>
  );
}

export default Search;
