"use client";
import { API } from "@/app/utls/api/API";
import { getCookie } from "@/app/utls/cookie/Cookie";
import { deleteImage } from "@/app/utls/fireFunctions/delete";
import Popup from "@/app/utls/popup/Popup";
import UsePopup from "@/app/utls/popup/usePopup";
import { textWash } from "@/app/utls/searchbar/TextFilter";
import { useRouter } from 'next/navigation'

const Form = ({ data }) => {
    const [popup, closePopup, showPopup, showPopupError, askPopup] = UsePopup(); const router = useRouter()
    const lowerCase = (text) => text.toLowerCase();
    const editItem = async (e) => {
        e.preventDefault();
        // newModel is an exact replica of laptop model in db
        let newModel = {
            ...data,
            laptop: {
                brand: lowerCase(textWash(e.target.Brand.value)),
                model: lowerCase(textWash(e.target.laptopModel.value)),
                price: Number(textWash(e.target.price.value)),
                stock: Number(textWash(e.target.stock.value)),
            },
            processor: {
                brand: lowerCase(textWash(e.target.processorBrand.value)),
                model: lowerCase(textWash(e.target.processorModel.value)),
                core: textWash(e.target.processorCore.value),
            },
            display: {
                size: Number(textWash(e.target.displaySize.value)),
                type: textWash(e.target.displayType.value),
                resolution: textWash(e.target.displayResolution.value),
                touchScreen: textWash(e.target.touchScreen.value),
            },
            memory: {
                ram: textWash(e.target.ram.value),
                ramType: textWash(e.target.ramType.value),
                description: textWash(e.target.ramDescription.value),
            },
            storage: {
                type: textWash(e.target.storageType.value),
                capacity: textWash(e.target.storageCapacity.value),
                description: textWash(e.target.storageDescription.value),
            },
            graphics: {
                size: Number(textWash(e.target.graphicSize.value)),
                ramType: lowerCase(textWash(e.target.graphicsType.value)),
                description: lowerCase(textWash(e.target.graphicsDescription.value)),
            },

            keyboard: textWash(e.target.keyboard.value),
            fingerprintSensor: textWash(e.target.fingerprint.value),
            portsAndSlots: textWash(e.target.ports.value),
            networkAndConnectivity: textWash(e.target.network.value),
            operatingSystem: textWash(e.target.operatingSystem.value),
            battery: textWash(e.target.battery.value),

            physicalSpecification: {
                color: textWash(e.target.color.value),
                weight: textWash(e.target.weight.value),
            },
            warranty: textWash(e.target.warrantyDetails.value),
        };
        // console.log(newModel);
        // return;
        newModel = JSON.stringify(newModel);
        try {
            const response = await fetch(API + "admin/update_product", {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                    authorization: getCookie("accessToken"),
                },
                body: newModel,
            });
            const result = await response.json();
            if (result.error) return showPopupError(result.message)
            showPopup(result.message)
        } catch (error) {
            showPopupError(error.message)
            console.error(error);
        }
    };

    const deleteItem = async () => {
        closePopup();
        for (let item of data.images) {
            let res = await deleteImage(item)
        }
        try {
            const response = await fetch(API + "admin/delete_product", {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                    authorization: getCookie("accessToken"),
                },
                body: JSON.stringify({ id: data._id }),
            });
            const result = await response.json();
            if (result) router.back()
            else showPopupError(result.message)

        } catch (error) {
            showPopupError(error.message)
            console.error(error);
        }

    }
    const deleteBtn = () => askPopup("Are you sure you want to delete ?", deleteItem);
    return (
        <>
            {popup.is && (
                <Popup
                    popup={popup}
                    closePopup={closePopup}
                ></Popup>
            )}
            <form className="grid grid-cols-2 gap-3" onSubmit={editItem}>
                <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
                    <label htmlFor="Brand" className="font-bold">
                        Brand <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="Brand"
                        className="py-3 px-2 bg-white rounded outline-indigo-500"
                        placeholder="Laptop brand | ex: Apple, HP, Assus"
                        defaultValue={data.laptop.brand}
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
                        defaultValue={data.laptop.model}
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
                        defaultValue={data.laptop.price}
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
                        defaultValue={data.laptop.stock}
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
                        defaultValue={data.processor.brand}
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
                        defaultValue={data.processor.model}
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
                        defaultValue={data.processor.core}
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
                        defaultValue={data.display.size}
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
                        defaultValue={data.display.type}
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
                        defaultValue={data.display.resolution}
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
                        {
                            data.display.touchScreen == true ?
                                <>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </> : <>
                                    <option value="false">No</option>
                                    <option value="true">Yes</option>
                                </>
                        }

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
                        defaultValue={data.memory.ram}
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
                        defaultValue={data.memory.ramType}
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
                        defaultValue={data.memory.description}
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
                        defaultValue={data.storage.type}
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
                        defaultValue={data.storage.capacity}
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
                        defaultValue={data.storage.description}
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
                        defaultValue={data.graphics.size}
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
                        defaultValue={data.graphics.ramType}
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
                        defaultValue={data.graphics.description}
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
                        defaultValue={data.keyboard}
                    ></textarea>
                </fieldset>
                <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
                    <label htmlFor="fingerprint" className="font-bold">
                        Fingerprint Sensor
                    </label>
                    <select
                        id="fingerprint"
                        className="py-3 px-2 bg-white rounded outline-indigo-500"
                    >
                        {
                            data.fingerPrint == true ?
                                <>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </> : <>
                                    <option value="false">No</option>
                                    <option value="true">Yes</option>
                                </>
                        }
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
                        defaultValue={data.portsAndSlots}
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
                        defaultValue={data.networkAndConnectivity}
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
                        defaultValue={data.os}
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
                        defaultValue={data.battery}
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
                        defaultValue={data.physicalSpecification.color}
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
                        defaultValue={data.physicalSpecification.weight}
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
                        defaultValue={data.warranty}
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
                <div className="mt-6 col-span-2 flex items-center justify-center gap-8">
                    <button
                        className={`bg-green-500 w-full lg:w-1/2 text-white font-semibold py-3 rounded  hover:bg-indigo-400 active:scale-95 duration-100`}
                    >
                        Update Laptop
                    </button>
                    <button onClick={deleteBtn} type="button"
                        className={`bg-red-500 w-full lg:w-1/2 text-white font-semibold py-3 rounded  hover:bg-indigo-400 active:scale-95 duration-100`}
                    >
                        Delete Laptop
                    </button>
                </div>
            </form>
        </>
    );
};

export default Form;
function GenerateDataUrl(brand, model) {
    brand = brand.trim();
    model = model.trim();
    return brand.replace(/ /g, "-") + "-" + model.replace(/ /g, "-");
}