"use client";
import { API } from "@/app/utls/api/API";
import { getCookie } from "@/app/utls/cookie/Cookie";
import Popup from "@/app/utls/popup/Popup";
import UsePopup from "@/app/utls/popup/usePopup";
let url;
const Form = ({ loading, data, error, setData }) => {
    const [popup, closePopup, showPopup, showPopupError, askPopup] = UsePopup();
    const makeRequest = async () => {
        closePopup();
        try {
            const result = await fetch(API + url, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                    "authorization": getCookie("accessToken")
                },
                body: JSON.stringify({ id: data._id })
            })
            const res = await result.json()
            if (res.error) showPopupError(res.message);
            else {
                showPopup(res.message);
                setData({ loading: false, data: res.result, error: false })
            }
        } catch (error) {
            showPopupError(error.message);
            console.log(error);
        }
    }
    const makeAdmin = () => { askPopup("Add user to admin ?", makeRequest), url = "admin/make_admin" };
    const removeAdmin = () => { askPopup("Remove user from admin ?", makeRequest), url = "admin/remove_admin" }
    const enableUser = () => { askPopup("Enable User ?", makeRequest), url = "admin/enable_user" }
    const disableUser = () => { askPopup("Add user to admin ?", makeRequest), url = "admin/disable_user" }


    if (loading) return (<div className="text-center py-12 font-semibold">
        <p>Loading. Please wait.....</p>
    </div>)
    if (error) return (<div className="text-center py-12 font-semibold">
        <p>Opps ! Some error happened while loading data. <br></br> Please refresh</p>
    </div>)
    return (
        <>
            {popup.is && <Popup popup={popup} closePopup={closePopup}></Popup>}
            <form
                className=" grid grid-cols-1 lg:grid-cols-2 gap-3"
            >
                <fieldset className="flex flex-col gap-2 p-2  pb-5 rounded">
                    <label htmlFor="name" className="font-bold">
                        User Name
                    </label>
                    <input
                        disabled
                        type="text"
                        id="name"
                        name="name"
                        className=" py-3 px-2 bg-white rounded outline-indigo-500"
                        placeholder="your name"
                        defaultValue={data?.name}
                    ></input>
                </fieldset>
                <fieldset className="flex flex-col gap-2 p-2  pb-5 rounded">
                    <label htmlFor="city" className="font-bold">
                        City / Zila
                    </label>
                    <input
                        disabled
                        type="text"
                        id="city"
                        name="city"
                        className=" py-3 px-2 bg-white rounded outline-indigo-500"
                        placeholder="City or zila you live in"
                        defaultValue={data?.city}
                    ></input>
                </fieldset>
                <fieldset className="flex flex-col gap-2 p-2  pb-5 rounded">
                    <label htmlFor="address" className="font-bold">
                        Delivery address
                    </label>
                    <input
                        disabled
                        type="text"
                        id="address"
                        name="address"
                        className=" py-3 px-2 bg-white rounded outline-indigo-500"
                        placeholder="From where you want to pick up orders"
                        defaultValue={data?.address}
                    ></input>
                </fieldset>
                <fieldset className="flex flex-col gap-2 p-2  pb-5 rounded">
                    <label htmlFor="email" className="font-bold">
                        Email
                    </label>
                    <input
                        disabled
                        type="text"
                        id="email"
                        name="email"
                        className=" py-3 px-2 bg-white rounded outline-indigo-500"
                        placeholder="your Email"
                        defaultValue={data?.email}
                        title="You Can't Edit Email"
                    ></input>
                </fieldset>
                <fieldset className="flex flex-col gap-2 p-2  rounded">
                    <label htmlFor="phone" className="font-bold">
                        Phone Number
                    </label>
                    <input
                        disabled
                        type="text"
                        id="phone"
                        name="phone"
                        className=" py-3 px-2 bg-white outline-indigo-500 rounded"
                        placeholder="Phone number"
                        defaultValue={data?.phone}
                        title="You Can't Edit Phone"
                    ></input>
                </fieldset>
                <fieldset className="flex flex-col gap-2 p-2  rounded">
                    <label htmlFor="role" className="font-bold">
                        User Role
                    </label>
                    <div
                        className=" py-3 px-2 bg-black text-blue-600 capitalize font-semibold outline-indigo-500 rounded text-center"
                        title="You Can't Edit Phone"
                    >{data?.role}</div>
                </fieldset>
            </form>
            <div className="mt-6 col-span-2 gap-3 flex items-center justify-around ">
                {data?.role == "admin" ? <button onClick={removeAdmin} className="bg-green-500 px-5 hover:px-8 text-white font-semibold py-2 rounded   active:scale-95 duration-100">
                    Remove Admin
                </button> : <button onClick={makeAdmin} className="bg-green-500 px-5 hover:px-8 text-white font-semibold py-2 rounded   active:scale-95 duration-100">
                    Make Admin
                </button>}
                {
                    data?.disabled ? <button onClick={enableUser} className="bg-orange-500 px-5 hover:px-8 text-white font-semibold py-2 rounded   active:scale-95 duration-100">
                        Enable User
                    </button> : <button onClick={disableUser} className="bg-orange-500 px-5 hover:px-8 text-white font-semibold py-2 rounded   active:scale-95 duration-100">
                        Disable User
                    </button>
                }


            </div>
        </>
    );
};

export default Form;
function GenerateDataUrl(brand, model) {
    brand = brand.trim();
    model = model.trim();
    return brand.replace(/ /g, "-") + "-" + model.replace(/ /g, "-");
}