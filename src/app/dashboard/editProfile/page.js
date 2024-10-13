import React from "react";

const Page = () => {
  return (
    <div className="bg-stone-200 min-h-full px-6 py-3 ">
        <h2 className=" text-stone-800 font-bold border-b-2 border-dashed border-b-stone-500 mb-3 text-xl pt-2 pb-5">Edit your profile</h2>
      <form className=" grid grid-cols-1 lg:grid-cols-2 gap-3">
        <fieldset className="flex flex-col gap-2 p-2  pb-5 rounded">
            <label htmlFor="name" className="font-bold">User Name</label>
            <input type="text" id="name" className=" py-3 px-2 bg-white rounded outline-indigo-500" placeholder="your name"></input>
        </fieldset>
        <fieldset className="flex flex-col gap-2 p-2  rounded">
            <label htmlFor="address" className="font-bold">Address</label>
            <input type="text" id="address" className=" py-3 px-2 bg-white outline-indigo-500 rounded" placeholder="your address"></input>
        </fieldset>
        
      </form>
    </div>
  );
};

export default Page;
