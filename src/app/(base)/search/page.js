import Sidebar from "./Sidebar";
import Main from "./Main";
import TopSection from "./TopSection";

const page = async (request) => {
  let queryParams = request.searchParams;
  console.log(queryParams);
  let newObj = {
    inStock: queryParams?.inStock || "false",
    min: queryParams?.min || 0,
    max: queryParams?.max || Infinity,
    processor: (queryParams?.processor ?? "").split(","),
    gen: (queryParams?.gen ?? "").split(","),
    ram: (queryParams?.ram ?? "").split(","),
    storage: (queryParams?.storage ?? "").split(","),
    graphics: (queryParams?.graphics ?? "").split(","),
    page: Number(queryParams.page) || 0,
    sort: Number(queryParams.sort) || 1,
    brand: queryParams.brand || "",
    text: queryParams.text || "",
  };
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row gap-2 w-full lg:w-5/6 relative py-4 mx-auto">
        <Sidebar request={newObj}></Sidebar>
        <section className="w-full">
          <TopSection></TopSection>
          <Main request={newObj}></Main>
        </section>
      </div>
    </div>
  );
};
export default page;
