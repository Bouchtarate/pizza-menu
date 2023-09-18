import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <header className="header">
      <h1>FAST REACT PIZZA CO.</h1>
    </header>
  );
};

const Menu = () => {
  return (
    <div>
      <main className="menu">
        <h2>OUR MENU</h2>
        <Description />
        <Pizza
          photoPath="pizzas/focaccia.jpg"
          pizzaName="pizza focaccia"
          ingredients="Tomato, Mozzarella, Spinach, And ricotta cheese."
          price={22.4}
        />
      </main>
    </div>
  );
};
const Description = () => {
  return (
    <p>
      Authentic italian cuisine. 6 creative dishes to choose from. All from our
      stone over, all organic, all delicious
    </p>
  );
};

const Pizza = ({ photoPath, pizzaName, ingredients, price }) => {
  return (
    <div className="pizza">
      <img src={photoPath} alt={pizzaName} />
      <div>
        <h3>{pizzaName}</h3>
        <p>{ingredients}</p>
        <span>{price} $</span>
      </div>
    </div>
  );
};

const Footer = () => {
  const hours = new Date().getHours();
  const openHours = 12;
  const closeHours = 22;
  let closeMsg;
  if (hours >= openHours && hours <= closeHours) {
    closeMsg = "We're open until 22:00. Come visit us or order online.";
  } else {
    closeMsg = "closed";
  }

  return <footer className="footer">{closeMsg}</footer>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
