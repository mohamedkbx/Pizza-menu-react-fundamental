import React from "react";
import ReactDOM from "react-dom/client";

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
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  );
}

function Header() {
  return <h1> Fast React Pizza</h1>;
}
function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}
function Footer() {
  const hour = new Date().getHours();

  const OPEN_HOURS = 12;
  const CLOSE_HOURS = 22;
  const IS_OPEN = hour >= OPEN_HOURS && hour <= CLOSE_HOURS;
  console.log("🚀 ~ Footer ~ IS_OPEN:", IS_OPEN);

  // if (hour >= OPEN_HOURS && hour <= CLOSE_HOURS) {
  //   alert("we are curentl open");
  //   return <footer>{new Date().toLocaleTimeString()} We are currently open</footer>;
  // } else {
  //   alert("we are currently closed");
  //   return <footer>{new Date().toLocaleTimeString()} We are currently closed</footer>;
  // }

  return <footer>{new Date().toLocaleTimeString()} We are currently open</footer>;
}

function Pizza() {
  return (
    <>
      <img src="pizzas/spinaci.jpg" alt="spinachi" />
      <h2>Spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </>
  );
}

const elementRoot = document.querySelector("#root");
const root = ReactDOM.createRoot(elementRoot);

root.render(<App />);
