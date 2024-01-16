import React from "react";
import Store from "../../img/Store_Android.png";
export const Step2 = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-10 ">
        <h1 className="text-2xl sm:text-5xl text-white font-bold">
          Paso 2: Instala la aplicación de Odoo:
        </h1>
        <p className="text-lg sm:text-2xl text-white  text-center">
          Una vez en la tienda de Android, busca la aplicación de Odoo
          utilizando el enlace proporcionado. <br /> Haz clic en "Instalar" para
          descargar e instalar la aplicación en tu dispositivo.
        </p>

        <img src={Store} alt="QR CODE" className="w-[250px]" />
      </div>
    </div>
  );
};
