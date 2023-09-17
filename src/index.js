import React from "react";
import ReactDOM from "react-dom/client";
function App() {
  return (
    <div>
      <h1>Pizza Menu App !</h1>
      <Pizza />
    </div>
  );
}

function Pizza() {
  return <h3>We starting soon</h3>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
