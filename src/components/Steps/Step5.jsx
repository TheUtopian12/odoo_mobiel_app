import React from "react";
import Home from "../../img/Home.png";
export const Step5 = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-2xl sm:text-5xl text-white font-bold">
          ¡Felicidades, ahora puedes utilizar tu aplicación Odoo!
        </h1>
        <p className="text-lg sm:text-2xl text-white  text-center">
          Una vez que hayas completado el proceso de inicio de sesión, habrás
          accedido con éxito a tu cuenta en la aplicación Odoo.
        </p>
        <p className="text-lg sm:text-2xl text-white  text-center">
          Explora las diferentes opciones y módulos disponibles para gestionar
          eficientemente tus actividades empresariales.
        </p>

        <img src={Home} alt="QR CODE" className="w-[250px]" />
      </div>
    </div>
  );
};
