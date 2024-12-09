import NextPrev from "@/app/utls/nextprev/NextPrev";
import NextPrevFunc from "@/app/utls/nextprev/NextPrevFun";
import Form from "./Form";
import { API } from "@/app/utls/api/API";
import ErrorPage from "@/app/error";
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
          Update a item
        </h2>
        <Form data={data.result}></Form>
        <div className="py-12 text-center">
          <Link
            href={"/dashboard/upload-image/" + data.result._id}
            className=" font-semibold bg-white px-6 py-3 shadow border-dashed border border-black"
          >
            Upload or Modify Images for {data.result.laptop.brand}{" "}
            {data.result.laptop.model}
          </Link>
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
