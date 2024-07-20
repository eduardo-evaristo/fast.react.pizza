import pizzaData from "./data.jsx";
import Pizza from "./Pizza.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Menu() {
  const pizzas = pizzaData;
  //const pizzas = []; //Not gonna work as intended bcuz unlike PHP, blank arrays are truthy in JS
  const pizzasQTT = pizzas.length; //That'll gives us 0 if []

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {/* Conditional rendering with ternary operator */}
      {pizzasQTT ? (
        //React Fragment
        <>
          <p>
            Authentic Italian culture. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious
          </p>
          <ul className="pizzas">
            {/*Rendering lists with array.map*/}
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        // eslint-disable-next-line react/no-unescaped-entities
        <p>We're out of pizzas at the moment! Pls come back later</p>
      )}
    </main>
  );
}

export default App;
