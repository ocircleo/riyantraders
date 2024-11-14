"use client";
import NextPrev from "@/app/utls/nextprev/NextPrev";
import NextPrevFunc from "@/app/utls/nextprev/NextPrevFun";
import Laptop from "./catagories/laptop";
import { textWash } from "@/app/utls/searchbar/TextFilter";
import { API } from "@/app/utls/api/API";
import { getCookie } from "@/app/utls/cookie/Cookie";
import UsePopup from "@/app/utls/popup/usePopup";
import { useRouter } from "next/navigation";

const Page = () => {
  const [popup, closePopup, showPopup, showPopupError, askPopup] = UsePopup();
  const router = useRouter();

  //function to submit form to add a new laptop to database -- below
  const addItem = async (e) => {
    e.preventDefault();
    // newModel is an exact replica of laptop model in db
    let newModel = {
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
    };
    newModel = JSON.stringify(newModel);
    try {
      const response = await fetch(API + "admin/add_product", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: getCookie("accessToken"),
        },
        body: newModel,
      });
      const result = await response.json();
      const gotoImageUpload = () => {
        const link = "/dashboard/upload-image/" + result.result._id;
        router.push(link);
      };
      if (!result.error) {
        askPopup("Item Added successfully, Add Images ?", gotoImageUpload);
        return;
      }
      showPopupError(result.message);
    } catch (error) {
      console.error(error);
      showPopupError(error.message);
    }
  };
  //function ends hare
  return (
    <div className="bg-stone-200/80 min-h-full px-6 py-3 flex justify-between flex-col">
      <div>
        <h2 className=" text-stone-800 font-bold border-b-2 border-dashed border-b-stone-500 mb-3 text-xl pt-2 pb-5">
          Add a item
        </h2>
        <Laptop submit={addItem} pop={{ popup, closePopup }}></Laptop>
      </div>

      <NextPrev
        info={NextPrevFunc(
          "/dashboard/",
          "Dashboard Home",
          "/dashboard/editItem",
          "Edit Item"
        )}
      ></NextPrev>
    </div>
  );
};

export default Page;
