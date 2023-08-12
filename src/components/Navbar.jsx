import "./Nabvar.css";
const Navbar = () => {
  return (
    <div className="container">
      <div className="imagen">
        <img src="images/logo.png" alt="logo" />
      </div>
      <h1>Aromas de aqui</h1>
      <h2 className="subtitle">Cafe, tortas y cupcakes</h2>
      <button className="button">Login</button>
    </div>
  );
};

export default Navbar;
