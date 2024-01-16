import React from "react";
import QR from "../../img/Odoo_Android.png";
export const Step1 = ({ size }) => {
  console.log(size);
  return (
    <div>
      <div className="flex flex-col items-center gap-10 text-center">
        <h1 className="text-2xl sm:text-5xl text-white font-bold">
          Paso 1: Accede a la tienda de Android:
        </h1>
        {size < 450 ? (
          <>
            <p className="text-lg sm:text-2xl text-white">
              Dirígete a la tienda de aplicaciones de Android utilizando el
              siguiente enlace proporcionado.
            </p>

            <a href="https://play.google.com/store/apps/details?id=com.odoo.mobile&hl=es_MX&gl=US&pli=1">
              <button className="primary">Ir a tienda</button>
            </a>
          </>
        ) : size > 450 ? (
          <>
            {" "}
            <p className="text-lg sm:text-2xl text-white">
              Dirígete a la tienda de aplicaciones de Android utilizando el
              siguiente codigo QR proporcionado.
            </p>
            <img src={QR} alt="QR CODE" className="w-[250px]" />
          </>
        ) : (
          ""
        )}
        {/** */}
      </div>
    </div>
  );
};
