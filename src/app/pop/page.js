"use client";

import { useState } from "react";
import Popup from "../utls/popup/Popup";
import UsePopup from "../utls/popup/usePopup";

const Page = () => {
  const [popup, closePopup, showPopup, showPopupError] = UsePopup();
  return (
    <div className=" w-full h-[200vh] ">
      {popup.is && (
        <Popup
          message={popup.message}
          callBack={closePopup}
          error={popup.error}
        ></Popup>
      )}
      <button
        onClick={() => showPopup("hello, I am from usepopup hook")}
        className="bg-green-300 p-3 rounded text-black font-semibold active:scale-90 duration-75 "
      >
        Show popup
      </button>
      <button
        onClick={() => showPopupError("Thy shall run")}
        className="bg-green-300 p-3 rounded text-black font-semibold active:scale-90 duration-75 border-4 outline-8 outline-black m-3"
      >
        Show popup error
      </button>
    </div>
  );
};

export default Page;
