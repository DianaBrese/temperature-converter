import React, { useState } from "react";

function TemperatureConverter() {
  let [temperature, setTemperature] = useState("");
  const userSelect = document.querySelector("#user-choice");
  const teclas = document.querySelectorAll(".tecla");
  let resultados = document.querySelectorAll(".result")

  const handleTemperature = (valorTecla) => {
    //Se usuário entrar -0 corrige para 0
    if(temperature === "-0") {
      setTemperature("0")
    }

    // Impede entrada de mais de um ponto decimal
    if (valorTecla === "." && temperature.includes(".")) {
      return false;
    }
    // Permite entrada do sinal negativo somente no início do campo
    if (valorTecla === "-" && temperature === "") {
      setTemperature(valorTecla);
      return true;
    }
    // Permite entrada valores outros que não ponto e sinal negativo
    if (valorTecla === "." && (temperature === "" || temperature === "-")) {
      setTemperature("0.");
      return true;
    }
    // Acrescenta um zero depois do ponto se o usuário omití-lo
    if (valorTecla !== "-") {
      setTemperature(temperature + valorTecla);
      return true;
    }
  };

  console.log(temperature);
  const handleBackSpace = () => {
    temperature = temperature.slice(0, -1);
    setTemperature(temperature);
  };

  const handleConverter = () => {
 

    [].map.call(teclas, (el) => {
      return el.setAttribute("disabled", true);
    });

    userSelect.setAttribute("disabled", true);

    temperature = Number(temperature);

    const resultCelsius = document.getElementById("celsius-temp");
    const resultFahrenheit = document.getElementById("fahrenheit-temp");
    const resultKelvin = document.getElementById("kelvin-temp");

    //Valor da unidade de temperatura escolhida pelo usuário
    let fromTemp =
      document.getElementById("user-choice").options[
        document.getElementById("user-choice").selectedIndex
      ].value;

    if (fromTemp === "C") {
      const celsiusTemperature = temperature.toFixed(2);

      const fahrenheitTemperature = ((temperature * 9) / 5 + 32).toFixed(2);
      const kelvinTemperature = (temperature + 273.15).toFixed(2);

      resultCelsius.insertAdjacentHTML("afterbegin", celsiusTemperature);
      resultFahrenheit.insertAdjacentHTML("afterbegin", fahrenheitTemperature);
      resultKelvin.insertAdjacentHTML("afterbegin", kelvinTemperature);
    }
    if (fromTemp === "F") {
      const fahrenheitTemperature = temperature.toFixed(2);
      const celsiusTemperature = (((temperature - 32) * 5) / 9).toFixed(2);
      const kelvinTemperature = (((temperature - 32) * 5) / 9 + 273.15).toFixed(
        2
      );
      resultCelsius.insertAdjacentHTML("afterbegin", celsiusTemperature);
      resultFahrenheit.insertAdjacentHTML("afterbegin", fahrenheitTemperature);
      resultKelvin.insertAdjacentHTML("afterbegin", kelvinTemperature);
    }
    if (fromTemp === "K") {
      const kelvinTemperature = temperature.toFixed(2);
      const fahrenheitTemperature = (1.8 * (temperature - 273.15) + 32).toFixed(
        2
      );
      const celsiusTemperature = (temperature - 273.15).toFixed(2);

      resultCelsius.insertAdjacentHTML("afterbegin", celsiusTemperature);
      resultFahrenheit.insertAdjacentHTML("afterbegin", fahrenheitTemperature);
      resultKelvin.insertAdjacentHTML("afterbegin", kelvinTemperature);
    }

  };

  
  const handleReset = () => {
    //Habilita as teclas
    [].map.call(teclas, (el) => {
      return el.removeAttribute("disabled", true);
    });

    //Remove os resultados da conversão
    [].map.call(resultados, (el) => {
      if(el.hasChildNodes()) {
        return el.removeChild(el.firstChild)
      };
    });

    //Habilita campo de seleção da unidade de ,edida da temperatura
    userSelect.removeAttribute("disabled")
    setTemperature("")
  }

  return (
    <>
      <aside className="areaResultado">
        <input id="user-temp" defaultValue={temperature} />
        <select id="user-choice">
          <option value="C">Celsius</option>
          <option value="F">Fahrenheit</option>
          <option value="K">Kelvin</option>
        </select>
        <div className="result" id="celsius-temp">
          &nbsp;
        </div>
        <span>
          <sup>o</sup>C
        </span>
        <div className="result" id="fahrenheit-temp">
          &nbsp;
        </div>
        <span>
          <sup>o</sup>F
        </span>
        <div className="result" id="kelvin-temp">
          &nbsp;
        </div>
        <span>
          <sup>o</sup>K
        </span>
        <button
          className="tecla"
          id="converter"
          onClick={() => handleConverter()}
        >
          Converter
        </button>
      </aside>
      <aside className="areaTeclas">
        <button
          className="n1 tecla"
          onClick={() => {
            handleTemperature("1");
          }}
        >
          1
        </button>
        <button
          className="n2 tecla"
          onClick={() => {
            handleTemperature("2");
          }}
        >
          2
        </button>
        <button
          className="n3 tecla"
          onClick={() => {
            handleTemperature("3");
          }}
        >
          3
        </button>
        <button
          className="n4 tecla"
          onClick={() => {
            handleTemperature("4");
          }}
        >
          4
        </button>
        <button
          className="n5 tecla"
          onClick={() => {
            handleTemperature("5");
          }}
        >
          5
        </button>
        <button
          className="n6 tecla"
          onClick={() => {
            handleTemperature("6");
          }}
        >
          6
        </button>
        <button
          className="n7 tecla"
          onClick={() => {
            handleTemperature("7");
          }}
        >
          7
        </button>
        <button
          className="n8 tecla"
          onClick={() => {
            handleTemperature("8");
          }}
        >
          8
        </button>
        <button
          className="n9 tecla"
          onClick={() => {
            handleTemperature("9");
          }}
        >
          9
        </button>
        <button
          className="n0 tecla"
          onClick={() => {
            handleTemperature("0");
          }}
        >
          0
        </button>
        <button
          className="virgula tecla"
          onClick={() => {
            handleTemperature(".");
          }}
        >
          ,
        </button>
        <button
          className="limpa tecla"
          onClick={() => handleBackSpace()}
        ></button>
        <button
          className="negativo tecla"
          onClick={() => {
            handleTemperature("-");
          }}
        >
          -
        </button>
        <div className="reset tecla" onClick={() => handleReset()}>Nova conversão</div>
      </aside>
    </>
  );
}

export default TemperatureConverter;
