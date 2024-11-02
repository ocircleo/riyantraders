"use client";
import { API } from "@/app/utls/api/API";
import { getCookie } from "@/app/utls/cookie/Cookie";
import Popup from "@/app/utls/popup/Popup";
import UsePopup from "@/app/utls/popup/usePopup";
import { textWash } from "@/app/utls/searchbar/TextFilter";
import React, { useState } from "react";
import { useRouter } from 'next/navigation'
const Form = ({ data }) => {
    const [popup, closePopup, showPopup, showPopupError, askPopup] = UsePopup(); const router = useRouter()
    const editUser = async (e) => {
        e.preventDefault();
        // newModel is an exact replica of laptop model in db
        let newModel = {
            _id: data._id,
            dataUrl: data.dataUrl || GenerateDataUrl(textWash(e.target.Brand.value), textWash(e.target.laptopModel.value)),
            laptop: {
                brand: textWash(e.target.Brand.value),
                model: textWash(e.target.laptopModel.value),
                price: textWash(e.target.price.value),
                stock: textWash(e.target.stock.value),
            },
            processor: {
                brand: textWash(e.target.processorBrand.value),
                model: textWash(e.target.processorModel.value),
                core: textWash(e.target.processorCore.value),
            },
            display: {
                size: textWash(e.target.displaySize.value),
                type: textWash(e.target.displayType.value),
                resolution: textWash(e.target.displayResolution.value),
                touchScreen: textWash(e.target.touchScreen.value),
                features: textWash(e.target.displayFeatures.value),
            },
            memory: {
                ram: textWash(e.target.ram.value),
                ramType: textWash(e.target.ramType.value),
                removable: textWash(e.target.removable.value),
            },
            storage: {
                type: textWash(e.target.storageType.value),
                capacity: textWash(e.target.storageCapacity.value),
                upgradeOptions: textWash(e.target.storageUpgrade.value),
            },
            graphics: {
                model: textWash(e.target.graphicsModel.value),
                memory: textWash(e.target.graphicsMemory.value),
            },
            keyboardAndTouchpad: {
                keyboard: {
                    type: textWash(e.target.keyboardType.value),
                    features: textWash(e.target.keyboardFeatures.value),
                },
                touchpad: textWash(e.target.touchPad.value),
            },
            cameraAndAudio: {
                webcam: textWash(e.target.webcam.value),
                speaker: textWash(e.target.speaker.value),
                microphone: textWash(e.target.microphone.value),
                audioFeatures: textWash(e.target.audioFeatures.value),
            },
            portsAndSlots: {
                cardReader: textWash(e.target.cardReader.value),
                hdmiPort: textWash(e.target.hdmiPort.value),
                usbTypeC: textWash(e.target.usbTypeC.value),
                headphoneJack: textWash(e.target.headphoneJack.value),
            },
            networkAndConnectivity: {
                wifi: textWash(e.target.wifi.value),
                bluetooth: textWash(e.target.bluetooth.value),
            },
            security: {
                fingerprintSensor: textWash(e.target.fingerprintSensor.value),
            },
            operatingSystem: textWash(e.target.operatingSystem.value),
            power: {
                batteryType: textWash(e.target.batteryType.value),
                batteryCapacity: textWash(e.target.batteryCapacity.value),
                adapterType: textWash(e.target.adapterType.value),
            },
            physicalSpecification: {
                color: textWash(e.target.color.value),
                dimensions: {
                    height: textWash(e.target.height.value),
                    width: textWash(e.target.width.value),
                    depth: textWash(e.target.depth.value),
                },
                weight: textWash(e.target.weight.value),
            },
            warranty: textWash(e.target.warrantyDetails.value),
            publishDate: data.publishDate
        };
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
    const deleteUser = async () => {
        closePopup();
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
    const deleteBtn = () => askPopup("Are you sure you want to delete ?", deleteUser);
    return (
        <>
            {popup.is && <Popup popup={popup} closePopup={closePopup}></Popup>}
            <form className="grid  grid-cols-2 gap-3" onSubmit={editUser}>

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
                    // defaultValue={data.warranty}
                    ></input>
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