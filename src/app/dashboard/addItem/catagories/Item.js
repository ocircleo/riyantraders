import Popup from "@/app/utls/popup/Popup";
import React from "react";

const Item = ({ submit, pop }) => {
  const { popup, closePopup } = pop;
  return (
    <>
      {popup.is && <Popup popup={popup} closePopup={closePopup}></Popup>}
      <form className="grid grid-cols-2 gap-3" onSubmit={submit}>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded lg:col-span-1 col-span-2">
          <label htmlFor="title" className="font-bold">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="title"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Product title"
            required
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded lg:col-span-1 col-span-2">
          <label htmlFor="price" className="font-bold">
            Price <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="price"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Product price"
            required
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded lg:col-span-1 col-span-2">
          <label htmlFor="category" className="font-bold">
            Category <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="category"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Product category"
            defaultValue={"general"}
            required
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded lg:col-span-1 col-span-2">
          <label htmlFor="stock" className="font-bold">
            Stock <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="stock"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Available stock"
            required
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded lg:col-span-1 col-span-2">
          <label htmlFor="description" className="font-bold">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Product description"
            required
          ></textarea>
        </fieldset>
        <div className="mt-6 col-span-2 flex items-center justify-center">
          <button
            className={`bg-green-600 w-full lg:w-1/2 text-white font-semibold py-3 rounded hover:bg-indigo-400 active:scale-95 duration-100`}
          >
            Add Product
          </button>
        </div>
      </form>
    </>
  );
};

export default Item;
