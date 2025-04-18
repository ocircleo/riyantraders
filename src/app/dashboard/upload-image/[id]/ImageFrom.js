"use client";
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
import React, { useRef, useState } from "react";
const ImageFrom = ({ data, imgUrl, targetIndex, type }) => {
  const router = useRouter();
  const imgRef = useRef(null);
  const [upload, setUpload] = useState({
    status: false,
    progress: 0,
    error: false,
  });
  let storage = getStorage(FireApp);
  //upload image function
  const handelFileChange = async (e) => {
    let mainUrlPart;
    if (imgUrl) {
      let firstUrlPart = imgUrl.split("?");
      let secondUrlPart = firstUrlPart[0].split("o/");
      mainUrlPart = secondUrlPart[1];
      mainUrlPart = mainUrlPart.replace("%2F", "/");
      mainUrlPart = mainUrlPart.replace("%2f", "/");
    }
    let fileInput = e.target;
    let file = fileInput.files[0];
    let name, type;
    if (!file) {
      //Will show a popup
      return;
    }
    type = file.type;
    let extension = file.name.split(".");
    extension = extension[extension.length - 1];

    name = `${Date.now()}x${Math.random()
      .toString(36)
      .slice(2, 11)}.${extension}`;
    const filePath = mainUrlPart ? mainUrlPart : "rt_images/" + name;
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
            let upData = { id: data._id, url, index: targetIndex, type };

            const res = await fetch(API + "admin/upload-image", {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                Authorization: getCookie("accessToken"),
              },
              body: JSON.stringify(upData),
            });
            const result = await res.json();

            // console.log("Image upload success message: ", result);
            setUpload({
              status: false,
              progress: 0,
              error: false,
            });
            if (imgRef.current) {
              imgRef.current.setAttribute("src", url);
            }
          } catch (error) {
            console.log("Server error:", error.message);
          }
        });
      }
    );
  };

  const deleteFile = async () => {
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
          let update = { id: data._id, url: imgUrl };
          const res = await fetch(API + "admin/delete-image", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: getCookie("accessToken"),
            },
            body: JSON.stringify(update),
          });
          const result = await res.json();
          if (!result.error) router.refresh();
        })
        .catch(async (error) => {
          if (error.code == "storage/object-not-found") {
            let update = { id: data._id, url: imgUrl };
            const res = await fetch(API + "admin/delete-image", {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                Authorization: getCookie("accessToken"),
              },
              body: JSON.stringify(update),
            });
            const result = await res.json();
            if (!result.error) router.refresh();
          }
        });
    } catch (error) {
      console.log(error.code);
    }
  };
  return (
    <div className="relative rounded aspect-video w-full lg:w-1/2 p-2 float-left overflow-hidden">
      {/* upload and delete button below  */}
      <div className="absolute top-0 right-0 rounded  flex gap-2 p-2 z-30">
        <fieldset className="relative bg-red-200/20 p-1 ">
          <label
            className="bg-green-500 text-white px-3 py-1 active:bg-black active:text-white rounded z-40 cursor-pointer select-none"
            htmlFor={targetIndex + "update"}
          >
            Upload : {targetIndex + 1}
          </label>
          <input
            onChange={handelFileChange}
            className="absolute top-0 left-0 w-full h-full invisible z-10"
            id={targetIndex + "update"}
            name={targetIndex + "update"}
            type="file"
            accept="image/*"
          ></input>
        </fieldset>
        <button
          onClick={deleteFile}
          className="bg-red-600 text-white px-3 py-1 active:bg-black active:text-white rounded cursor-pointer select-none"
        >
          Delete
        </button>
      </div>
      {/* The main image  */}
      <div className="h-full w-full rounded-md overflow-hidden relative">
        {upload.status ? (
          <div className="absolute z-30 w-full h-full flex flex-col items-center justify-center bg-gray-300">
            <p className="text-sm text-red-400">
              {upload.error ? "Error happened" : ""}{" "}
            </p>
            {upload.error ? (
              <button
                className="text-green-400 px-5 py-2 text-sm active:scale-95 duration-100"
                onClick={() =>
                  setUpload({ status: false, progress: 0, error: false })
                }
              >
                Close
              </button>
            ) : (
              ""
            )}
            Uploading <p>{upload.progress}%</p>
          </div>
        ) : (
          ""
        )}
        <img
          ref={imgRef}
          src={imgUrl}
          className="absolute top-0 left-0 h-full w-full bg-transparent z-20"
        ></img>
        <div className="absolute top-0 left-0 h-full w-full bg-pink-50 z-10 grid place-content-center text-xl font-semibold">
          {imgUrl ? "Loading Image..." : "No Image"}
        </div>
      </div>
    </div>
  );
};

export default ImageFrom;
