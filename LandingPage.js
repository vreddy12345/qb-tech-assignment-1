import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../actions";
import { useHistory } from 'react-router-dom';


function LandingPage() {
  const [programmingLanguage, setProgrammingLanguage] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = () => {
    // Perform form validation here
    if (!programmingLanguage) {
      alert("Please enter a programming language.");
      return;
    }

    // If form is valid, dispatch the login action and navigate to job listings
    const user = { programmingLanguage };
    dispatch(login(user));
    history.push("/job-listings");
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Programming Language"
          value={programmingLanguage}
          onChange={(e) => setProgrammingLanguage(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LandingPage;
