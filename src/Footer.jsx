function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {/* Conditional Rendering with ternary operator */}
      {isOpen ? (
        //Passing closeHour props to component
        <FooterOpen closeHour={closeHour} />
      ) : (
        //Passing openHour props to component
        <FooterClosed openHour={openHour} />
      )}
    </footer>
  );
}

function FooterOpen({ closeHour }) {
  //Since we've taken these parts out, we don't have access to the variables of Footer anymore, we must pass them as props to this component now
  return (
    <div className="order">
      <p>Open until {closeHour}:00.</p>
      <button className="btn">Order</button>
    </div>
  );
}

function FooterClosed({ openHour }) {
  //Since we've taken these parts out, we don't have access to the variables of Footer anymore, we must pass them as props to this component now
  return (
    <div className="order">
      <p>Closed until {openHour}:00.</p>
    </div>
  );
}

export default Footer;
