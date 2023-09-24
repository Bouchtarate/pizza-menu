import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import "./data.js";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

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
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza
              key={pizza.name}
              photoPath={pizza.photoName}
              pizzaName={pizza.name}
              ingredients={pizza.ingredients}
              price={pizza.price}
            />
          ))}
        </ul>
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

const Pizza = ({ photoPath, pizzaName, ingredients, price, soldOut }) => {
  return (
    <li className="pizza">
      <img src={photoPath} alt={pizzaName} />
      <div>
        <h3>{pizzaName}</h3>
        <p>{ingredients}</p>
        <span>{price} $</span>
      </div>
    </li>
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

  return (
    <footer className="footer">
      <p className="order">{closeMsg}</p>

      <button className="btn">Order Now</button>
    </footer>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
