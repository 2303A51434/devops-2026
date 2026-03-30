import React, { useState } from "react";
import StudentProfile from "./StudentProfile";

function App() {
  const [showProfile, setShowProfile] = useState(true);

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Lifecycle Demonstration</h1>

      <button
        onClick={toggleProfile}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          marginBottom: "20px",
          cursor: "pointer"
        }}
      >
        {showProfile ? "Hide" : "Show"} Student Profile
      </button>

      {showProfile && <StudentProfile />}
    </div>
  );
}

export default App;
