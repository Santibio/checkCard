import { UisCheckCircle, UisTimesCircle } from "@iconscout/react-unicons-solid";
import { useState } from "react";

function App() {
  const [input, setInput] = useState({});
  const [check, setCheck] = useState(false);
  const inputHandler = (e) => {
    const { value, name } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const checkCard = (magazine, card) => {
    console.log({ magazine });
    console.log({ card });
    const editedMagazine = magazine.toLowerCase().replaceAll(" ", ""); //Se vuelve todo minuscula y quitan los espacios en blanco
    const editedCard = card.replaceAll(" ", "").toLowerCase().split(""); //Se vuelve todo minuscula, quitan los espacios en blanco y se transforma a array

    for (var i of editedMagazine) {
      //Recorro el articulo moficado anteriormente
      if (editedCard.indexOf(i) >= 0) {
        editedCard.splice(editedCard.indexOf(i), 1); //Si esta la letra se la quito de la carta
      }
    }

    return editedCard.length > 0
      ? setCheck(false) //Si es mayor a cero no se quitaron todas las letras de la carta
      : setCheck(true); //Si se alcanzo a quitar todas las letras
  };

  console.log(check);
  return (
    <div className="App">
      <div className="container">
        <h1>Check Card</h1>
        <div>
          <label>Magazine</label>
          <textarea
            name="magazine"
            value={input.magazine}
            cols="30"
            rows="10"
            onChange={inputHandler}
          />
        </div>
        <div>
          <label>Card</label>
          <textarea
            name="card"
            value={input.card}
            cols="30"
            rows="10"
            onChange={inputHandler}
          />
        </div>
        <div>
          <button onClick={() => checkCard(input.magazine, input.card)}>
            Check
          </button>
          <div>
            {check ? (
              <div className="checkContainer">
                <UisCheckCircle color="rgb(40, 172, 40)"/>
                <span>Yes, you can</span>
              </div>
            ) : (
              <div className="checkContainer">
                <UisTimesCircle color="rgb(207, 57, 57)" />
                <span>No, you can't</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
