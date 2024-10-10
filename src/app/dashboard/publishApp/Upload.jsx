"use client";
import FireApp from "@/app/utls/FireApp/FireApp";
import React, { useRef, useState } from "react";
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
} from "firebase/storage";
import { getCookie } from "@/app/utls/cookie/Cookie";
import { API, TEST_MODE_FILE } from "@/app/utls/api/API";



const Upload = ({ updateState, appInfo }) => {
    const [uploadState, setUploadState] = useState({
        progress: 0,
        uploaded: false,
        uploadState: "none",
        error: false,
        message: "no message",
        size: "0",
    });
    let storage = getStorage(FireApp);
    const [result, setResult] = useState({});
    const handelUploadState = (key, value) => {
        setUploadState((prevState) => ({ ...prevState, [key]: value }));
    };
    const handelFileChange = async (e) => {
        let fileInput = e.target;
        let file = fileInput.files[0];
        let name, extension, type;
        if (!file) {
            handelUploadState("uploadState", "pending");
            handelUploadState("error", true);
            handelUploadState("message", "No compatible file given");
            return;
        }
        type = file.type
        extension = file.name.split(".");
        extension = extension[extension.length - 1];
        name = appInfo.name + "." + extension;
        let size = (file.size / 1024).toFixed(2);
        const storageRef = ref(storage, `${TEST_MODE_FILE?"test":""}_apps/${name}`);
        const metadata = { contentType: type };
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);
        setUploadState({
            progress: 0,
            uploaded: false,
            uploadState: "pending",
            error: false,
            message: "no message",
            size: size,
        });
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                handelUploadState("progress", progress.toFixed(2));
                console.log("Upload is " + progress + "% done");
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                }
            },
            (error) => {
                // Handle unsuccessful uploads
                setUploadState({
                    progress: 0,
                    uploaded: false,
                    uploadState: "failed",
                    error: true,
                    message: "Failed to upload",
                    size: size,
                });
                console.log("Error happened");
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...

                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    let file_url = downloadURL
                    let newName = name.split(".")[0]
                    let data = { file_url, type, size, name : newName,fileName: name };
                    fetch(API+"user/update-app-info", {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: getCookie("accessToken"),
                        },
                        body: JSON.stringify(data),
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            setResult(data);
                            updateState("result",data?.result || {})
                            handelUploadState("uploadState", "success");
                            handelUploadState("error", false);
                            handelUploadState("message", "File upload success");
                        });
                });
            }
        );
    };

    function ResetUpload() {
        setUploadState({
            progress: 0,
            uploaded: false,
            uploadState: "none",
            error: false,
            message: "no message",
            size: 0,
        });
    }
    function continuePublishing(){
        updateState("uploaded",true)
    }
    if (uploadState.uploadState == "none") {
        return (
            <div className="flex items-center justify-center flex-col w-full min-h-full bg-white rounded px-2">
                <p className="mb-12 text-center text-xl font-semibold">
                    Upload files and share them easily
                </p>
                <div className="w-full md:w-4/6 border-dashed h-72 border-4 relative rounded flex items-center justify-center flex-col">
                    <input
                        onChange={handelFileChange}
                        type="file"
                        name="file"
                        id="file"
                        className="h-full w-full absolute opacity-0 top-0 cursor-pointer  left-0"
                    />
                    <h2 className="text-xl">Drag and Drop to upload file</h2>
                    <p>or</p>
                    <p>
                        <span className="text-blue-500 font-bold">Click</span> to Chose
                    </p>
                </div>
            </div>
        );
    } else if (uploadState.uploadState == "pending") {
        return (
            <div className="w-full bg-white min-h-full flex items-center justify-center text-center gap-4 flex-col px-4">
                <h2 className="text-2xl font-semibold">
                    Uploading File: {uploadState.progress}%
                </h2>
                <p>
                    File size:{" "}
                    {Number(uploadState.size) > 1024
                        ? (Number(uploadState.size) / 1024).toFixed(2) + "MB"
                        : uploadState.size + "Kb"}
                </p>
                <div className="h-4 w-full md:w-4/5 rounded bg-gray-200">
                    <div
                        style={{ width: `${uploadState.progress}%` }}
                        className={`h-4 min-w-2  bg-blue-400 duration-150 rounded`}
                    ></div>
                </div>
                {uploadState.progress > 99 ? (
                    <p>Handling your file in the server, please wait</p>
                ) : (
                    ""
                )}
            </div>
        );
    } else if (uploadState.uploadState == "success") {
        return (
            <div className="w-full bg-white min-h-full flex items-center justify-center text-center gap-4 flex-col px-4">
                <h1 className="text-3xl font-semibold">File upload success</h1>
                <button
                    onClick={continuePublishing}
                    className="bg-indigo-500 text-white font-semibold px-6 py-2 active:scale-105 duration-100"
                >
                    Continue
                </button>
            </div>
        );
    }
    return (
        <div className="w-full bg-white min-h-full flex items-center justify-center text-center gap-4 flex-col ">
            <h1 className="text-3xl font-semibold text-red-500">
                File upload Failed
            </h1>
            <p>An error happened while uploading your file</p>
            <button
                onClick={ResetUpload}
                className="bg-indigo-500 text-white font-semibold px-6 py-2 active:scale-105 duration-100"
            >
                Upload More file
            </button>
        </div>
    );
};

export default Upload;