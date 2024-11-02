import Popup from "@/app/utls/popup/Popup";
import React from "react";

const Laptop = ({ submit, edit = false, pop }) => {
  const { popup, closePopup } = pop;
  console.log(pop);
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
            placeholder="ex: Apple M1, Assus ip324"
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
            placeholder="Processor model | ex: Intel, AMD"
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
            placeholder="Processor model | ex: M3 Pro chip"
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
            placeholder="Processor core details | ex: 12-core CPU, 18-core GPU"
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="displaySize" className="font-bold">
            Display Size <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="displaySize"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Display size | ex: 16.2-inch"
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
            placeholder="Display type | ex: Liquid Retina display"
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
          <label htmlFor="displayFeatures" className="font-bold">
            Display Features
          </label>
          <textarea
            id="displayFeatures"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Display features | ex: XDR brightness, contrast ratio, etc."
          ></textarea>
        </fieldset>

        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="ram" className="font-bold">
            RAM <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="ram"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="RAM size | ex: 18GB"
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
            placeholder="RAM type | ex: Unified memory"
          ></input>
        </fieldset>

        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="removable" className="font-bold">
            Removable Memory
          </label>
          <select
            id="removable"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
          >
            <option value="Non-Removable">Non-Removable</option>
            <option value="Removable">Removable</option>
          </select>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="storageType" className="font-bold">
            Storage Type
          </label>
          <input
            type="text"
            id="storageType"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Storage type | ex: SSD"
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="storageCapacity" className="font-bold">
            Storage Capacity <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="storageCapacity"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Storage capacity | ex: 512GB"
            required
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="storageUpgrade" className="font-bold">
            Storage Upgrade Options
          </label>
          <textarea
            id="storageUpgrade"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Storage upgrade options | ex: 1TB, 2TB"
          ></textarea>
        </fieldset>

        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="graphicsModel" className="font-bold">
            Graphics Model
          </label>
          <input
            type="text"
            id="graphicsModel"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Graphics model | ex: Apple 10-core GPU"
          ></input>
        </fieldset>

        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="graphicsMemory" className="font-bold">
            Graphics Memory
          </label>
          <input
            type="text"
            id="graphicsMemory"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Graphics memory | ex: Shared"
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="keyboardType" className="font-bold">
            Keyboard Type
          </label>
          <input
            type="text"
            id="keyboardType"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Keyboard type | ex: Backlit Magic Keyboard"
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="keyboardFeatures" className="font-bold">
            Keyboard Features
          </label>
          <textarea
            id="keyboardFeatures"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Keyboard features | ex: 78 keys, ambient light sensor"
          ></textarea>
        </fieldset>

        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="touchPad" className="font-bold">
            TouchPad Features
          </label>
          <textarea
            id="touchPad"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Touchpad features | ex: Force Touch trackpad"
          ></textarea>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="webcam" className="font-bold">
            Webcam
          </label>
          <input
            type="text"
            id="webcam"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Webcam | ex: 1080p FaceTime HD"
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="speaker" className="font-bold">
            Speaker System
          </label>
          <input
            type="text"
            id="speaker"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Speaker system | ex: six-speaker sound system"
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="microphone" className="font-bold">
            Microphone
          </label>
          <input
            type="text"
            id="microphone"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Microphone | ex: Three-mic array"
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="audioFeatures" className="font-bold">
            Audio Features
          </label>
          <textarea
            id="audioFeatures"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Audio features | ex: Wide stereo sound, Dolby Atmos"
          ></textarea>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="cardReader" className="font-bold">
            Card Reader
          </label>
          <input
            type="text"
            id="cardReader"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Card Reader type | ex: SD/SDHC/SDXC"
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="hdmiPort" className="font-bold">
            HDMI Port
          </label>
          <input
            type="text"
            id="hdmiPort"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="HDMI port | ex: 1x HDMI"
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="usbTypeC" className="font-bold">
            USB Type-C / Thunderbolt
          </label>
          <input
            type="text"
            id="usbTypeC"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="USB Type-C | ex: 2x Thunderbolt / USB 4 ports"
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="headphoneJack" className="font-bold">
            Headphone Jack
          </label>
          <input
            type="text"
            id="headphoneJack"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Headphone jack | ex: 3.5 mm headphone jack"
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="wifi" className="font-bold">
            Wi-Fi
          </label>
          <input
            type="text"
            id="wifi"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Wi-Fi version | ex: Wi-Fi 6E (802.11ax)"
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="bluetooth" className="font-bold">
            Bluetooth
          </label>
          <input
            type="text"
            id="bluetooth"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Bluetooth version | ex: Bluetooth 5.3"
          ></input>
        </fieldset>

        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="fingerprintSensor" className="font-bold">
            Fingerprint Sensor
          </label>
          <input
            type="text"
            id="fingerprintSensor"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Fingerprint sensor | ex: Touch ID"
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
            placeholder="Operating system | ex: macOS"
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="batteryType" className="font-bold">
            Battery Type
          </label>
          <input
            type="text"
            id="batteryType"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Battery type | ex: Lithium‑polymer"
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="batteryCapacity" className="font-bold">
            Battery Capacity
          </label>
          <input
            type="text"
            id="batteryCapacity"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Battery capacity | ex: 100-watt-hour"
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="adapterType" className="font-bold">
            Adapter Type
          </label>
          <input
            type="text"
            id="adapterType"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Adapter type | ex: 140W USB-C Power Adapter"
          ></input>
        </fieldset>

        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="color" className="font-bold">
            Color <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="color"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Color | ex: Space Black"
            required
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="height" className="font-bold">
            Height
          </label>
          <input
            type="text"
            id="height"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Height | ex: 0.66 inch (1.68 cm)"
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="width" className="font-bold">
            Width
          </label>
          <input
            type="text"
            id="width"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Width | ex: 14.01 inches (35.57 cm)"
          ></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
          <label htmlFor="depth" className="font-bold">
            Depth
          </label>
          <input
            type="text"
            id="depth"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Depth | ex: 9.77 inches (24.81 cm)"
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

        <div className="mt-6 col-span-2 flex items-center justify-center ">
          <button
            className={`${
              edit ? "bg-red-500" : "bg-green-600"
            } w-full lg:w-1/2 text-white font-semibold py-3 rounded  hover:bg-indigo-400 active:scale-95 duration-100`}
          >
            {edit ? "Update Laptop" : "Add Laptop"}
          </button>
        </div>
      </form>
    </>
  );
};

export default Laptop;
