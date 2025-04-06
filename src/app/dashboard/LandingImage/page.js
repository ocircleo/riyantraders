"use client";
import NextPrev from "@/app/utls/nextprev/NextPrev";
import NextPrevFunc from "@/app/utls/nextprev/NextPrevFun";
import Popup from "@/app/utls/popup/Popup";
import UsePopup from "@/app/utls/popup/usePopup";
import Image from "next/image";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { API } from "@/app/utls/api/API";
import { getCookie } from "@/app/utls/cookie/Cookie";
import FireApp from "@/app/utls/FireApp/FireApp";
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();
  const [popup, closePopup, showPopup, showPopupError, askPopup] = UsePopup();
  const [imageData, setImageData] = useState({
    loading: false,
    data: [],
    error: true,
  });
  const targetLinkRef = useRef(null);
  const updateState = (data) => {
    setImageData((prevState) => ({ ...prevState, ...data }));
  };
  useEffect(() => {
    const fetchData = async () => {
      updateState({ loading: true, error: false });
      try {
        const response = await fetch(API + "user/get_landing_img", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        if (data.error) {
          updateState({ error: true, loading: false });
          showPopupError(data.message);
        } else {
          updateState({ data: data.result, loading: false, error: false });
        }
      } catch (error) {
        updateState({ error: true, loading: false });
        showPopupError("Something went wrong. Please try again later.");
      }
    };
    fetchData();
    console.log("re rendered");
  }, []);
  const [upload, setUpload] = useState({
    status: false,
    progress: 0,
    error: false,
  });
  let storage = getStorage(FireApp);
  //upload image function
  const handelFileChange = async (e) => {
    let fileInput = e.target;
    let file = fileInput.files[0];
    let name, type;
    let linkUrl = targetLinkRef.current.value;

    if (linkUrl.length < 5) {
      showPopupError("Please enter a target link");
      return;
    }
    if (!file) {
      //Will show a popup
      showPopupError("File not selected");
      return;
    }
    type = file.type;
    let extension = file.name.split(".");
    extension = extension[extension.length - 1];

    name = `${Date.now()}x${Math.random()
      .toString(36)
      .slice(2, 11)}.${extension}`;
    const filePath = "rt_landing_images/" + name;
    const storageRef = ref(storage, filePath);
    const metadata = { contentType: type };
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    //upload state observer
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const UpProgress = parseFloat(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        ).toFixed(2);
        setUpload((prevState) => {
          return { status: true, progress: UpProgress, error: false };
        });
        console.log("Upload is " + UpProgress + "% done");
      },
      (error) => {
        // Handle unsuccessful uploads
        setUpload((prevState) => {
          return { ...prevState, error: true };
        });
        console.log("Error happened: ", error.message);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...

        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          try {
            let url = downloadURL;
            let upData = { imageUrl: url, targetLink: linkUrl };

            const res = await fetch(API + "admin/upload_landing_img", {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                Authorization: getCookie("accessToken"),
              },
              body: JSON.stringify(upData),
            });
            const result = await res.json();
            // console.log("Image upload success message: ", result);

            router.refresh();
            showPopup(result.message);
          } catch (error) {
            console.log("Server error:", error.message);
          }
        });
      }
    );
  };

  const deleteFile = async (id, imgUrl) => {
    if (!imgUrl) return;
    try {
      let mainUrlPart;
      if (imgUrl) {
        let firstUrlPart = imgUrl.split("?");
        let secondUrlPart = firstUrlPart[0].split("o/");
        mainUrlPart = secondUrlPart[1];
        mainUrlPart = mainUrlPart.replace("%2F", "/");
        mainUrlPart = mainUrlPart.replace("%2f", "/");
      }
      const storageRef = ref(storage, mainUrlPart);
      deleteObject(storageRef)
        .then(async () => {
          console.log("Image successfully deleted");
          let update = { id };
          const res = await fetch(API + "admin/delete_landing_img", {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: getCookie("accessToken"),
            },
            body: JSON.stringify(update),
          });
          const result = await res.json();
          router.refresh();
          showPopup(result.message);
        })
        .catch(async (error) => {
          if (error.code == "storage/object-not-found") {
            let update = { id };
            const res = await fetch(API + "admin/delete_landing_img", {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                Authorization: getCookie("accessToken"),
              },
              body: JSON.stringify(update),
            });
            const result = await res.json();
            router.refresh();
          }
        });
    } catch (error) {
      console.log(error.code);
    }
  };
  return (
    <div className="bg-stone-200/80 min-h-full px-6 py-3 flex flex-col justify-between w-full">
      {popup.is && <Popup popup={popup} closePopup={closePopup}></Popup>}
      <div className="h-full shrink-0 ">
        <h2 className=" text-stone-800 font-bold border-b-2 border-dashed border-b-stone-500 mb-3 text-xl pt-2 pb-5">
          Edit your profile
        </h2>
        <div className="h-full relative">
          <div className="flex flex-col gap-3 h-full">
            <div className="bg-white">
              <fieldset className="flex flex-col gap-2 p-2 pb-5 rounded">
                <label htmlFor="targetLink" className="font-bold">
                  Target Link
                </label>
                <input
                  ref={targetLinkRef}
                  type="text"
                  id="targetLink"
                  name="targetLink"
                  className="py-3 px-2 border-blue-400 border-2 bg-gray-100 rounded outline-indigo-500"
                  placeholder="Target Link (Min Length is 5)"
                ></input>
              </fieldset>
              <fieldset className="relative flex items-center justify-center py-7">
                <label
                  className="bg-black text-white px-6 py-2 active:scale-90 duration-100 active:text-white rounded z-40 cursor-pointer select-none text-md"
                  htmlFor={"upload"}
                >
                  Upload Image
                </label>
                <input
                  className="absolute top-0 left-0 w-full h-full invisible z-10"
                  id={"upload"}
                  name={"upload"}
                  type="file"
                  accept="image/*"
                  onChange={handelFileChange}
                ></input>
              </fieldset>
              {upload.status && (
                <div className="px-6">
                  <div className="w-full bg-gray-300 h-4 overflow-hidden">
                    <div
                      className={`h-full bg-blue-500 transition-all duration-300`}
                      style={{ width: `${upload.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-center text-sm mt-2">{upload.progress}%</p>
                </div>
              )}
            </div>
            {imageData.loading && (
              <div className=" w-full h-full py-12 font-semibold text-xl text-center rounded-md bg-white">
                Loading Images...
              </div>
            )}
            {imageData?.data?.map((item, index) => {
              return (
                <div key={index} className="relative">
                  <div className="flex flex-col gap-3 w-full aspect-[10/4] bg-white rounded">
                    <span className="text-stone-800 font-semibold p-3">
                      <span className="text-blue-500"> {index + 1}.</span>{" "}
                      Target: {item.targetLink}
                    </span>
                    <Image
                      src={item.imageUrl}
                      alt="Landing Image"
                      className="w-full aspect-[10/4] rounded-md"
                      width={600}
                      height={300}
                      placeholder="blur"
                      blurDataURL={"/loadingimg.png"}
                    />
                  </div>
                  <div className="absolute right-3 top-3 flex gap-2">
                    <button
                      onClick={() => deleteFile(item._id, item.imageUrl)}
                      className="bg-blue-500 flex items-center gap-2 text-white px-4 py-2 rounded-md hover:bg-red-500 active:scale-90 duration-100"
                    >
                      <FaTrash /> Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <NextPrev
        info={NextPrevFunc(
          "/dashboard/messages",
          "Messages",
          "/dashboard/changePassword",
          "Change Password"
        )}
      ></NextPrev>
    </div>
  );
};

export default Page;
