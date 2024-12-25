import React from "react";
import Spinner from "react-bootstrap/Spinner";

function BootSpinner() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Spinner animation="border" variant="success" size="lg" />
    </div>
  );
}

export default BootSpinner;
