import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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

function Header() {
  return (
    <header className="header">
      <h1> Fast React Pizza</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const numPizza = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizza > 0 ? (
        <>
          <p>
            Authentic Italian Cuisine. 6 Creative dishes to choose from. All from our stone oven,
            all organic, all Delicious
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => {
              return <Pizza pizzaObj={pizza} key={pizza.name} />;
            })}
          </ul>
        </>
      ) : (
        <p> The Menu is Empty</p>
      )}
    </main>
  );
}
function Pizza({ pizzaObj }) {
  return (
    <li className={pizzaObj.soldOut ? "pizza sold-out" : "pizza"}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h2>{pizzaObj.name}</h2>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SoldOut" : `$${pizzaObj.price}`}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();

  const OPEN_HOURS = 12;
  const CLOSE_HOURS = 22;
  const IS_OPEN = hour >= OPEN_HOURS && hour <= CLOSE_HOURS;
  console.log("🚀 ~ Footer ~ IS_OPEN:", IS_OPEN);

  if (!IS_OPEN) {
    return (
      <p>
        We are happy to welcome yot Betwwn {OPEN_HOURS} and {CLOSE_HOURS}
      </p>
    );
  }
  return <footer className="footer">{IS_OPEN && <Order closeHour={CLOSE_HOURS} />}</footer>;
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We are open until {closeHour}:00. Come visit us</p>
      <button className="btn">Order </button>
    </div>
  );
}

const elementRoot = document.querySelector("#root");
const root = ReactDOM.createRoot(elementRoot);

root.render(<App />);
