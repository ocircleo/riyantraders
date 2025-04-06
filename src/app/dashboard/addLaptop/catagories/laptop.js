import Popup from "@/app/utls/popup/Popup";
import React from "react";

const Laptop = ({ submit, pop }) => {
  const { popup, closePopup } = pop;
  return (
    <>
      {popup.is && <Popup popup={popup} closePopup={closePopup}></Popup>}
      <form className="grid grid-cols-2 gap-3" onSubmit={submit}>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="Brand" className="font-bold">
            Brand <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="Brand"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Laptop brand | ex: Apple, HP, Assus"
            required
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="laptopModel" className="font-bold">
            Laptop Model (important) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="laptopModel"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="ex: M1 air, vivo book pro"
            required
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="price" className="font-bold">
            Price <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="price"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="1000..."
            required
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="stock" className="font-bold">
            In Stock <span className="text-red-500">*</span>
          </label>
          <input
            type="Number"
            id="stock"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Available laptops in stock"
            required
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="processorBrand" className="font-bold">
            Processor Brand <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="processorBrand"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Processor Brand | ex: Intel, AMD"
            required
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="processorModel" className="font-bold">
            Processor Model
          </label>
          <input
            type="text"
            id="processorModel"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Processor model | ex: i5-4440@3.1Ghz"
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="processorCore" className="font-bold">
            Processor Core Details
          </label>
          <input
            type="text"
            id="processorCore"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Processor core details | ex: 12-core CPU, 2 x performance 2 x base"
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="displaySize" className="font-bold">
            Display Size (In Inch) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="displaySize"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Display size | ex: 16.2"
            required
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="displayType" className="font-bold">
            Display Type
          </label>
          <input
            type="text"
            id="displayType"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Display type | ex: Oled Display, Liquid Retina display"
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="displayResolution" className="font-bold">
            Display Resolution
          </label>
          <input
            type="text"
            id="displayResolution"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Display resolution | ex: 3456 x 2234"
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="touchScreen" className="font-bold">
            Touch Screen
          </label>
          <select
            id="touchScreen"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="ram" className="font-bold">
            RAM Size (In GB)<span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="ram"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="RAM size | ex: 18"
            required
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="ramType" className="font-bold">
            RAM Type
          </label>
          <input
            type="text"
            id="ramType"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="RAM type | ex: LPDDR5, Unified memory"
          ></input>
        </fieldset>

        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="ramDescription" className="font-bold">
            More About Ram
          </label>
          <textarea
            id="ramDescription"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Max size, Expandable slot, Special ram features"
          ></textarea>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="storageType" className="font-bold">
            Storage Type
          </label>
          <input
            type="text"
            id="storageType"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Storage type | ex: nvme SSD, sata SSD, HDD"
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="storageCapacity" className="font-bold">
            Storage Capacity (In GB) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="storageCapacity"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Storage capacity | ex: 256, 512"
            required
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="storageDescription" className="font-bold">
            Storage features
          </label>
          <textarea
            id="storageDescription"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Read Write Speed, Dust proof etc. ex: r/w 200/320"
          ></textarea>
        </fieldset>

        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="graphicSize" className="font-bold">
            Graphics Size (In GB)
          </label>
          <input
            type="number"
            id="graphicSize"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Graphics Size | .5, 2, 4"
          ></input>
        </fieldset>

        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="graphicsType" className="font-bold">
            Graphics Type
          </label>
          <input
            type="text"
            id="graphicsType"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Integrated, Custom | ex: G-force GTX-4500"
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="graphicsDescription" className="font-bold">
            More about GPU
          </label>
          <textarea
            id="graphicsDescription"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Clock speed, Special features etc."
          ></textarea>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="keyboard" className="font-bold">
            Keyboard Features
          </label>
          <textarea
            id="keyboard"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Backlit keyboard, full size etc"
          ></textarea>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="fingerprint" className="font-bold">
            fingerprint sensor
          </label>
          <select
            id="fingerprint"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="ports" className="font-bold">
            Ports and Slots
          </label>
          <input
            type="text"
            id="ports"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="1 x HDMI, 2 x USB 3.00, SD Card Slot"
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="network" className="font-bold">
            Network Connectivity
          </label>
          <input
            type="text"
            id="network"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Wi-Fi 6E (802.11ax), Bluetooth 4.1"
          ></input>
        </fieldset>

    
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="operatingSystem" className="font-bold">
            Operating System
          </label>
          <input
            type="text"
            id="operatingSystem"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Windows 10 pro, Mac os, Kali linux"
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="battery" className="font-bold">
            Battery
          </label>
          <input
            type="text"
            id="battery"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Battery capacity, Watt, Cells etc"
          ></input>
        </fieldset>

        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="color" className="font-bold">
            Available Color <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="color"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Space Black, Sliver, Tint"
            required
          ></input>
        </fieldset>

        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="weight" className="font-bold">
            Weight
          </label>
          <input
            type="text"
            id="weight"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Weight | ex: 2.14 kg"
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="warrantyDetails" className="font-bold">
            Warranty Details <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="warrantyDetails"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Warranty details | ex: 1 Year international warranty"
            required
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="description" className="font-bold">
            Additional description
          </label>
          <textarea
            id="description"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="If you want to add more information do it hare"
          ></textarea>
        </fieldset>
        <div className="mt-6 col-span-2 flex items-center justify-center ">
          <button
            className={`bg-green-600 w-full lg:w-1/2 text-white font-semibold py-3 rounded  hover:bg-indigo-400 active:scale-95 duration-100`}
          >
            Add Laptop
          </button>
        </div>
      </form>
    </>
  );
};

export default Laptop;
