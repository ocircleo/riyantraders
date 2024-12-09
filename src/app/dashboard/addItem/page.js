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
  const lowerCase = (text) => text.toLowerCase();
  const addItem = async (e) => {
    e.preventDefault();
    // newModel is an exact replica of laptop model in db
    let newModel = {
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
      images: [],
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
