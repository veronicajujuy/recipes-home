import "./Home.css";
const Home = () => {
  return (
    <div className="container-home">
      <h1 className="title">Receta de cupcakes</h1>
      <div className="imagenreceta">
        <img src="images/cupcake.jpg" alt="" />
      </div>
      <div className="container-ing-prep">
        <div className="ingredientes">
          <h2>Ingredientes</h2>
          <h3>Para la masa:</h3>
          <ol>
            <li>2 tazas de Harina (280 gramos)</li>
            <li>2 tazas de Azúcar (400 gramos)</li>
            <li>100 gramos de Mantequilla</li>
            <li>3 unidades de Huevos</li>
            <li>2 cucharaditas de Polvos de hornear</li>
            <li>1 taza de Leche (240 mililitros)</li>
            <li>Esencia de vainilla o ralladura de limón al gusto</li>
          </ol>
          <h3>Para la decoración:</h3>

          <ol>
            <li>Clara de huevo</li>
            <li>Azúcar</li>
            <li>Jugo de limón</li>
            <li>Colorantes artificiales</li>
          </ol>
        </div>
        <div className="preparacion">
          <h2>Preparacion</h2>
          <p>
            Cómo hacer Cupcakes o quequitos: 1 Antes de adentrarnos en la receta
            de cupcakes sencillos, cabe destacar que las cantidades de la
            decoración no se especifican porque dependerán del número de
            quequitos que se quieren decorar. Ahora sí, para realizar la masa de
            los cupcakes coge un recipiente lo suficientemente grande y añade
            todos los ingredientes especificados. 2 Mézclalos hasta formar una
            masa espesa y homogénea. Para que te sea más fácil integrarlos, te
            aconsejamos que tamices la harina antes y la mantequilla esté a
            temperatura ambiente (sácala del frigorífico media hora antes de
            empezar).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
