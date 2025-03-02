import NextPrev from "@/app/utls/nextprev/NextPrev";
import NextPrevFunc from "@/app/utls/nextprev/NextPrevFun";
import { API } from "@/app/utls/api/API";
import ErrorPage from "@/app/error";
import Upload from "./Upload";
import Link from "next/link";
const Page = async (request) => {
  const { id } = request.params;
  let res, data;
  try {
    res = await fetch(API + "user/laptop_id/" + id, { cache: "no-cache" });
    data = await res.json();
  } catch (error) {
    console.log(error);
    return <ErrorPage></ErrorPage>;
  }
  return (
    <div className="bg-stone-200/80 min-h-full px-6 py-3 flex justify-between flex-col">
      <div>
        <h2 className=" text-stone-800 font-bold border-b-2 border-dashed border-b-stone-500 mb-3 text-xl pt-2 pb-5">
          Upload Images
        </h2>
        <div>
          <p>
           <span className="underline underline-offset-4 font-semibold">Upload images for:</span>  <br/>
            Model: {data.result.laptop.brand}
            {data.result.laptop.model}
            
          </p>
          <p className="text-sm italic py-2">
            {data.result.images.length == 0
              ? "No image found, Uplaod ?"
              : "Re-upload images and delete old ones ?"} 
          </p>
              <ol>
                <li>Max images : 5</li>
                <li>Image Ratio 16/9</li>
                <li>Try to <Link href={"https://imageresizer.com/image-compressor/editor"} className="text-blue-600 underline underline-offset-4 italic font-semibold">Compares</Link> image first</li>
              </ol>
        
            <Upload data={data.result}></Upload>
         
        </div>
      </div>

      <NextPrev
        info={NextPrevFunc(
          "/dashboard/addItem",
          "Add Item",
          "/dashboard/statistics",
          "Statistics"
        )}
      ></NextPrev>
    </div>
  );
};

export default Page;
