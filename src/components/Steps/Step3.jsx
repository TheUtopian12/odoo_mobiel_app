import React from "react";
import Login from "../../img/Login_Odoo.png";
export const Step3 = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-2xl sm:text-5xl text-white font-bold">
          Paso 3: Abre la aplicación de Odoo:
        </h1>
        <p className="text-lg sm:text-2xl text-white  text-center">
          Después de la instalación, localiza la aplicación de Odoo en tu
          dispositivo y ábrela. Al iniciar la aplicación, se mostrará una
          ventana inicial.
        </p>
        <p className="text-lg sm:text-2xl text-white  text-center">
          Dentro de la aplicación de Odoo, verás una pantalla de inicio de
          sesión. Asegúrate de seguir los siguientes pasos:
        </p>
        <img src={Login} alt="QR CODE" className="w-[250px]" />
      </div>
    </div>
  );
};
