"use client";
import { API } from "@/app/utls/api/API";
import { getCookie } from "@/app/utls/cookie/Cookie";
import { deleteImage } from "@/app/utls/fireFunctions/delete";
import Popup from "@/app/utls/popup/Popup";
import UsePopup from "@/app/utls/popup/usePopup";
import { textWash } from "@/app/utls/searchbar/TextFilter";
import { useRouter } from 'next/navigation'

const Form = ({ data }) => {
  const [popup, closePopup, showPopup, showPopupError, askPopup] = UsePopup();
  const router = useRouter();

  const editItem = async (e) => {
    e.preventDefault();
    let newModel = {
      ...data,
      title: textWash(e.target.title.value),
      price: Number(textWash(e.target.price.value)),
      category: textWash(e.target.category.value),
      stock: Number(textWash(e.target.stock.value)),
      description: textWash(e.target.description.value),
    };
    newModel = JSON.stringify(newModel);
    try {
      const response = await fetch(API + "admin/update_any_product", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: getCookie("accessToken"),
        },
        body: newModel,
      });
      const result = await response.json();
      if (result.error) return showPopupError(result.message);
      showPopup(result.message);
    } catch (error) {
      showPopupError(error.message);
      console.error(error);
    }
  };

  const deleteItem = async () => {
    closePopup();
    for (let item of data.images) {
      await deleteImage(item);
    }
    try {
      const response = await fetch(API + "admin/delete_any_product", {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: getCookie("accessToken"),
        },
        body: JSON.stringify({ id: data._id }),
      });
      const result = await response.json();
      if (result) router.back();
      else showPopupError(result.message);
    } catch (error) {
      showPopupError(error.message);
      console.error(error);
    }
  };

  const deleteBtn = () => askPopup("Are you sure you want to delete?", deleteItem);

  return (
    <>
      {popup.is && <Popup popup={popup} closePopup={closePopup}></Popup>}
      <form className="grid grid-cols-2 gap-3" onSubmit={editItem}>
        <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded lg:col-span-1 col-span-2">
          <label htmlFor="title" className="font-bold">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="title"
            className="py-3 px-2 bg-white rounded outline-indigo-500"
            placeholder="Product title"
            defaultValue={data.title}
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
            defaultValue={data.price}
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
            defaultValue={data.category}
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
            defaultValue={data.stock}
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
            defaultValue={data.description}
            required
          ></textarea>
        </fieldset>
        <div className="mt-6 col-span-2 flex items-center justify-center gap-8">
          <button
            className={`bg-green-500 w-full lg:w-1/2 text-white font-semibold py-3 rounded hover:bg-indigo-400 active:scale-95 duration-100`}
          >
            Update Product
          </button>
          <button
            onClick={deleteBtn}
            type="button"
            className={`bg-red-500 w-full lg:w-1/2 text-white font-semibold py-3 rounded hover:bg-indigo-400 active:scale-95 duration-100`}
          >
            Delete Product
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;