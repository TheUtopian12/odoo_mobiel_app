import React, { Fragment, useEffect, useState } from "react";
import "./stepper.css";
import { TiTick } from "react-icons/ti";
import { Step1 } from "../Steps/Step1";
import { Step2 } from "../Steps/Step2";
import { Step3 } from "../Steps/Step3";
import { Step4 } from "../Steps/Step4";
import { Step5 } from "../Steps/Step5";
import ReactConfetti from "react-confetti";

const Stepper = () => {
  const steps = [
    "Acceder a tienda",
    "Instalar Aplicacion",
    "Abrir Aplicacion",
    "Iniciar Sesion",
    "Odoo App Instalada",
  ];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  console.log(screenSize.width.toString());
  return (
    <>
      {currentStep === 5 ? (
        <ReactConfetti width={screenSize.width} height={screenSize.height} />
      ) : (
        ""
      )}
      {screenSize.width > 450 ? (
        <div className="flex justify-between fixed top-10">
          {steps?.map((step, i) => (
            <div
              key={i}
              className={`step-item ${currentStep === i + 1 && "active"} ${
                (i + 1 < currentStep || complete) && "complete"
              } `}
            >
              <div className="step">
                {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
              </div>
              <p className="text-gray-500">{step}</p>
            </div>
          ))}
        </div>
      ) : screenSize.width < 450 ? (
        <div className="flex items-center gap-5 fixed top-10 left-10">
          <div className="w-10 h-10 flex items-center justify-center z-10 relative bg-slate-700 rounded-full font-semibold text-white; border-green-500 border-2">
            <span className="text-white text-xl font-bold">{currentStep}</span>
          </div>
          <div className="text-white text-lg font-bold">
            {steps[currentStep - 1]}
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="pt-32 pb-20 sm:pt-0 sm:pb-0 sm:fixed top-32 overflow-auto h-screen">
        <div>
          {currentStep === 1 ? (
            <Step1 size={screenSize.width} />
          ) : currentStep === 2 ? (
            <Step2 />
          ) : currentStep === 3 ? (
            <Step3 />
          ) : currentStep === 4 ? (
            <Step4 />
          ) : currentStep === steps.length ? (
            <Step5 />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="fixed top-[5.5%] right-[5%] sm:top-auto sm:bottom-[10%] sm:right-[15%]">
        {!complete && (
          <button
            className="btn"
            onClick={() => {
              currentStep === steps.length
                ? setComplete(true)
                : setCurrentStep((prev) => prev + 1);
            }}
          >
            {currentStep === steps.length ? "Finalizar" : "Siguiente"}
          </button>
        )}
        {complete && (
          <button
            className="btn"
            onClick={() => {
              setCurrentStep(1), setComplete(false);
            }}
          >
            Regresar al inicio
          </button>
        )}
      </div>
    </>
  );
};

export default Stepper;
