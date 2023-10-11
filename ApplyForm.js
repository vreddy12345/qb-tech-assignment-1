import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions";
import { useHistory } from "react-router-dom";

function ApplyForm() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resume, setResume] = useState(null);

  const handleSubmit = () => {
    // Perform form validation and submission
    if (!name || !email || !coverLetter || !resume) {
      alert("Please fill out all required fields.");
      return;
    }

    // Transfer data to the SuccessPage component
    history.push("/success", {
      formData: { name, email, coverLetter, resume },
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Cover Letter"
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
        />
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setResume(e.target.files[0])}
        />
        <button type="submit">Submit</button>
        <button onClick={() => dispatch(logout())}>Logout</button>
      </form>
    </div>
  );
}

export default ApplyForm;
