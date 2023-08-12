import "./RecetasCard.css";
const RecetasCard = () => {
  return (
    <div className="rececard">
      <div className="imagencard">
        <img src="images/cupcake.jpg" alt="" />
      </div>
      <div className="resto">
        <h1 className="title">Receta de cupcakes</h1>
        <div className="leermas">Leer mas...</div>
      </div>
    </div>
  );
};

export default RecetasCard;
