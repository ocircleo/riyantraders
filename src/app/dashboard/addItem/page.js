"use client";
import NextPrev from "@/app/utls/nextprev/NextPrev";
import NextPrevFunc from "@/app/utls/nextprev/NextPrevFun";
import { textWash } from "@/app/utls/searchbar/TextFilter";
import { API } from "@/app/utls/api/API";
import { getCookie } from "@/app/utls/cookie/Cookie";
import UsePopup from "@/app/utls/popup/usePopup";
import { useRouter } from "next/navigation";
import Item from "./catagories/Item";

const Page = () => {
  const [popup, closePopup, showPopup, showPopupError, askPopup] = UsePopup();
  const router = useRouter();

  //function to submit form to add a new product to database -- below
  const addItem = async (e) => {
    e.preventDefault();
    let newProduct = {
      title: textWash(e.target.title.value),
      price: Number(textWash(e.target.price.value)),
      category: textWash(e.target.category.value),
      stock: Number(textWash(e.target.stock.value)),
      description: textWash(e.target.description.value),
    };
    newProduct = JSON.stringify(newProduct);
    try {
      const response = await fetch(API + "admin/add_product_any", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: getCookie("accessToken"),
        },
        body: newProduct,
      });
      const result = await response.json();
      const gotoImageUpload = () => {
        const link = "/dashboard/upload-image/" + result.result._id;
        router.push(link);
      };
      if (!result.error) {
        askPopup("Item Added successfully, Add Images?", gotoImageUpload);
        return;
      }
      showPopupError(result.message);
    } catch (error) {
      console.error(error);
      showPopupError(error.message);
    }
  };
  //function ends here
  return (
    <div className="bg-stone-200/80 min-h-full px-6 py-3 flex justify-between flex-col">
      <div>
        <h2 className=" text-stone-800 font-bold border-b-2 border-dashed border-b-stone-500 mb-3 text-xl pt-2 pb-5">
          Add a item
        </h2>
        <Item submit={addItem} pop={{ popup, closePopup }}></Item>
      </div>

      <NextPrev
        info={NextPrevFunc(
          "/dashboard/orders",
          "Orders",
          "/dashboard/editItem",
          "Edit Item"
        )}
      ></NextPrev>
    </div>
  );
};

export default Page;
