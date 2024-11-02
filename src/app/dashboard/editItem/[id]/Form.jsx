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
    const editItem = async (e) => {
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
    const deleteItem = async () => {
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
    const deleteBtn = () => askPopup("Are you sure you want to delete ?", deleteItem);
    return (
        <>
            {popup.is && (
                <Popup
                    popup={popup}
                    closePopup={closePopup}
                ></Popup>
            )}
            <form className="grid  grid-cols-2 gap-3" onSubmit={editItem}>
                <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2 ">
                    <label htmlFor="Brand" className="font-bold">
                        Brand <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="Brand"
                        className="py-3 px-2 bg-white rounded outline-indigo-500"
                        placeholder="Laptop brand | ex: Apple, HP, Asus"
                        required
                        defaultValue={data.laptop.brand}
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
                        placeholder="ex: Apple M1, Asus IP324"
                        required
                        defaultValue={data.laptop.model}
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
                        defaultValue={data.laptop.price}
                    ></input>
                </fieldset>

                <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
                    <label htmlFor="stock" className="font-bold">
                        In Stock <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="number"
                        id="stock"
                        className="py-3 px-2 bg-white rounded outline-indigo-500"
                        placeholder="Available laptops in stock"
                        required
                        defaultValue={data.laptop.stock}
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
                        placeholder="Processor brand | ex: Intel, AMD"
                        required
                        defaultValue={data.processor.brand}
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
                        placeholder="Processor core details | ex: 12-core CPU, 18-core GPU"
                        defaultValue={data.processor.core}
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
                        defaultValue={data.display.size}
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
                        defaultValue={data.display.touchScreen ? "true" : "false"}
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
                        defaultValue={data.display.features}
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
                        defaultValue={data.memory.ram}
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
                        defaultValue={data.memory.ramType}
                    ></input>
                </fieldset>

                <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded  lg:col-span-1 col-span-2">
                    <label htmlFor="removable" className="font-bold">
                        Removable Memory
                    </label>
                    <select
                        id="removable"
                        className="py-3 px-2 bg-white rounded outline-indigo-500"
                        defaultValue={data.memory.removable}
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
                        defaultValue={data.storage.type}
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
                        defaultValue={data.storage.capacity}
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
                        defaultValue={data.storage.upgradeOptions}
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
                        defaultValue={data.graphics.model}
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
                        defaultValue={data.graphics.memory}
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
                        defaultValue={data.keyboardAndTouchpad.keyboard.type}
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
                        defaultValue={data.keyboardAndTouchpad.keyboard.features}
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
                        defaultValue={data.keyboardAndTouchpad.touchpad}
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
                        defaultValue={data.cameraAndAudio.webcam}
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
                        defaultValue={data.cameraAndAudio.speaker}
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
                        defaultValue={data.cameraAndAudio.microphone}
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
                        defaultValue={data.cameraAndAudio.audioFeatures}
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
                        defaultValue={data.portsAndSlots.cardReader}
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
                        defaultValue={data.portsAndSlots.hdmiPort}
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
                        defaultValue={data.portsAndSlots.usbTypeC}
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
                        defaultValue={data.portsAndSlots.headphoneJack}
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
                        defaultValue={data.networkAndConnectivity.wifi}
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
                        defaultValue={data.networkAndConnectivity.bluetooth}
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
                        defaultValue={data.security.fingerprintSensor}
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
                        defaultValue={data.operatingSystem}
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
                        defaultValue={data.power.batteryType}
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
                        defaultValue={data.power.batteryCapacity}
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
                        defaultValue={data.power.adapterType}
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
                        defaultValue={data.physicalSpecification.color}
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
                        defaultValue={data.physicalSpecification.dimensions.height}
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
                        defaultValue={data.physicalSpecification.dimensions.width}
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
                        defaultValue={data.physicalSpecification.dimensions.depth}
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
                        required
                        defaultValue={data.warranty}
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