"use client";
import { API } from "@/app/utls/api/API";
import NextPrev from "@/app/utls/nextprev/NextPrev";
import NextPrevFunc from "@/app/utls/nextprev/NextPrevFun";
import { useEffect, useRef, useState } from "react";
import Pagination from "@/app/utls/pagination/Paginate";
import {
  getSingleUserBlock,
  setMultiUser,
  setSingleUserBlock,
} from "@/app/utls/db/UsersDB";
import User from "./User";

const Page = () => {
  const [users, setUsers] = useState({ loading: true, data: [] });
  const [pages, setPages] = useState({ current: 0, length: 0 });
  const formRef = useRef(null);

  const fetchData = async (key, city, page) => {
    setUsers({ loading: true, data: [] });
    try {
      const response = await fetch(
        `${API}user/search_users_admin?text=${key}&city=${city}&page=${page}`
      );
      const data = await response.json();
      setPages({ current: page, length: data?.result?.length });
      setUsers({ loading: false, data: data?.result?.data });
      let queryString = key + city; // For validating if search params changed
      setMultiUser(data?.result?.data); // for finding on info using id quickly (caching data)
      setSingleUserBlock(page, data?.result?.data, queryString); //for page like page 0, 1 to etc. (caching data)
    } catch (error) {
      console.log(error);
    }
  };

  let timeout;
  const formChange = (page, timer = 400) => {
    let key, city;
    if (formRef.current) {
      let form = formRef.current;
      key = form.key.value;
      city = form.city.value;
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fetchData(key, city, page);
    }, timer);
  };
  const submitForm = (e) => {
    e.preventDefault();
    formChange(0);
  };
  const paginate = (to) => {
    const cachedData = getSingleUserBlock(to);
    if (cachedData) {
      setUsers({ loading: false, data: cachedData });
      setPages({ current: to, length: pages.length });
      return;
    }
    if (to < 0) to = 0;
    if (to > pages.length / 12) to = Math.floor(pages.length / 12);
    formChange(to, 0);
  };
  useEffect(() => {
    fetchData("", "all", 0);
  }, []);
  return (
    <div className="bg-stone-200/80 min-h-full px-6 py-3 flex justify-between flex-col">
      <div>
        <h2 className=" text-stone-800 font-bold border-b-2 border-dashed border-b-stone-500 mb-3 text-xl pt-2 pb-5">
          Users Audit
        </h2>
        <form
          onSubmit={submitForm}
          ref={formRef}
          onChange={submitForm}
          className="flex justify-between flex-wrap gap-2 md:gap-4 lg:gap-6"
        >
          <fieldset className="flex flex-col gap-2 flex-grow">
            <label htmlFor="key" className="font-semibold">
              User Email or Phone
            </label>
            <input
              type="text"
              name="key"
              placeholder="please add @ for email"
              id="key"
              className="py-3 px-2 bg-white rounded outline-indigo-500 w-full "
            ></input>
          </fieldset>
          <fieldset className="flex flex-col gap-2">
            <label htmlFor="city" className="font-semibold">
              City{" "}
            </label>
            <select
              id="city"
              name="city"
              className="py-3 px-2 bg-white rounded outline-indigo-500 "
            >
              <option value="all">Default</option>
              <option value="bagerhat">Bagerhat</option>
              <option value="bandarban">Bandarban</option>
              <option value="barguna">Barguna</option>
              <option value="barisal">Barisal</option>
              <option value="bhola">Bhola</option>
              <option value="bogra">Bogra</option>
              <option value="brahmanbaria">Brahmanbaria</option>
              <option value="chandpur">Chandpur</option>
              <option value="chapainawabganj">Chapai Nawabganj</option>
              <option value="chattogram">Chattogram</option>
              <option value="chuadanga">Chuadanga</option>
              <option value="comilla">Comilla</option>
              <option value="coxsBazar">Cox&apos;s Bazar</option>
              <option value="dhaka">Dhaka</option>
              <option value="dinajpur">Dinajpur</option>
              <option value="faridpur">Faridpur</option>
              <option value="feni">Feni</option>
              <option value="gaibandha">Gaibandha</option>
              <option value="gazipur">Gazipur</option>
              <option value="gopalganj">Gopalganj</option>
              <option value="habiganj">Habiganj</option>
              <option value="jamalpur">Jamalpur</option>
              <option value="jashore">Jashore</option>
              <option value="jhalokathi">Jhalokathi</option>
              <option value="jhenaidah">Jhenaidah</option>
              <option value="joypurhat">Joypurhat</option>
              <option value="khagrachari">Khagrachari</option>
              <option value="khulna">Khulna</option>
              <option value="kishoreganj">Kishoreganj</option>
              <option value="kurigram">Kurigram</option>
              <option value="kushtia">Kushtia</option>
              <option value="lakshmipur">Lakshmipur</option>
              <option value="lalmonirhat">Lalmonirhat</option>
              <option value="madaripur">Madaripur</option>
              <option value="magura">Magura</option>
              <option value="manikganj">Manikganj</option>
              <option value="meherpur">Meherpur</option>
              <option value="moulvibazar">Moulvibazar</option>
              <option value="munshiganj">Munshiganj</option>
              <option value="mymensingh">Mymensingh</option>
              <option value="naogaon">Naogaon</option>
              <option value="narail">Narail</option>
              <option value="narayanganj">Narayanganj</option>
              <option value="narsingdi">Narsingdi</option>
              <option value="natore">Natore</option>
              <option value="netrokona">Netrokona</option>
              <option value="nilphamari">Nilphamari</option>
              <option value="noakhali">Noakhali</option>
              <option value="pabna">Pabna</option>
              <option value="panchagarh">Panchagarh</option>
              <option value="patuakhali">Patuakhali</option>
              <option value="pirojpur">Pirojpur</option>
              <option value="rajbari">Rajbari</option>
              <option value="rajshahi">Rajshahi</option>
              <option value="rangamati">Rangamati</option>
              <option value="rangpur">Rangpur</option>
              <option value="satkhira">Satkhira</option>
              <option value="shariatpur">Shariatpur</option>
              <option value="sherpur">Sherpur</option>
              <option value="sirajganj">Sirajganj</option>
              <option value="sunamganj">Sunamganj</option>
              <option value="sylhet">Sylhet</option>
              <option value="tangail">Tangail</option>
              <option value="thakurgaon">Thakurgaon</option>
            </select>
          </fieldset>
        </form>
        <div className="bg-indigo-400 text-white grid grid-cols-12 text-xs sm:text-sm md:text-base p-2 justify-items-center mt-4">
          <div className="col-span-1">Index</div>
          <div className="col-span-2">Name</div>
          <div className="col-span-3">Phone</div>
          <div className="col-span-4">Email</div>
          <div className="col-span-2">Edit</div>
        </div>
        {users.loading ? (
          <p className="text-center py-12 text-lg font-semibold">Loading ...</p>
        ) : (
          <>
            {users?.data.map((ele, index) => (
              <User
                key={index}
                index={index}
                currentPage={pages.current}
                data={ele}
              ></User>
            ))}
          </>
        )}
      </div>
      <div className="flex gap-4">
        <p className="py-2">
          Page {pages.current} / {Math.floor(pages.length / 12)}
        </p>
        <p className="py-2">Users found: {pages.length}</p>
      </div>
      <Pagination current={pages.current} paginate={paginate}></Pagination>
      <NextPrev
        info={NextPrevFunc(
          "/dashboard/editItem",
          "Edit Item",
          "/dashboard/messages",
          "Messages"
        )}
      ></NextPrev>
    </div>
  );
};

export default Page;
