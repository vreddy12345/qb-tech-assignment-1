import React from "react";
import { useSelector } from "react-redux";

function SuccessPage() {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h2>Success!</h2>
      <p>Your application data:</p>
      <p>Programming Language: {user.programmingLanguage}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Cover Letter: {user.coverLetter}</p>
      <p>Resume: {user.resume && user.resume.name}</p>
    </div>
  );
}

export default SuccessPage;
