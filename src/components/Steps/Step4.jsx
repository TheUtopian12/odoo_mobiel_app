import React from "react";
import Login from "../../img/Login_Odoo.png";
export const Step4 = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-2xl sm:text-5xl text-white font-bold">
          Paso 4: Inicia sesión en Odoo:
        </h1>
        <p className="text-lg sm:text-2xl text-white  text-center">
          Dentro de la aplicación de Odoo, verás una pantalla de inicio de
          sesión. Asegúrate de seguir estos pasos:
        </p>

        <ul
          className="text-white text-lg sm:text-xl"
          style={{ listStyleType: "circle" }}
        >
          <li>
            Ingresa <span className="font-bold underline">"odoo.wispi.mx"</span>
            en el campo de "Dirección del servidor".
          </li>
          <li>
            Introduce tu nombre de usuario y contraseña en los campos
            correspondientes.{" "}
          </li>
          <li>
            Presiona el botón de "Inicio de sesión" para acceder a tu cuenta.
          </li>
        </ul>
        <p className="text-lg sm:text-2xl text-white text-center">
          Siguiendo estos pasos, estarás listo para utilizar la aplicación de
          Odoo en tu dispositivo
        </p>
        <img src={Login} alt="QR CODE" className="w-[250px]" />
      </div>
    </div>
  );
};
