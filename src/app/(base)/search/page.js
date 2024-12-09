import Sidebar from "./Sidebar";
import Main from "./Main";
import TopSection from "./TopSection";
import { queryOrganizer } from "@/app/utls/searchUrlFilter/searchUrlFilter";
import { API } from "@/app/utls/api/API";
import ErrorPage from "@/app/error";
import Search from "@/app/utls/searchbar/Search";

const page = async (request) => {
  let queryParams = request.searchParams;
  let finalQuery = queryOrganizer(queryParams);
  if (!finalQuery?.page) finalQuery.page = 0;
  let queryString = API + "user/search?";
  let start = true;
  for (let item in finalQuery) {
    if (start) queryString += `${item}=${finalQuery[item]}`;
    else queryString += `&${item}=${finalQuery[item]}`;
    start = false;
  }
  let data,
    paginate = { current: finalQuery.page ?? 0 };
  try {
    let result = await fetch(queryString, { cache: "no-cache" });
    data = await result.json();
    data = data?.result ?? {};
    paginate.length = data?.length ?? 0;
    if (data.error) return <ErrorPage></ErrorPage>;
  } catch (error) {
    console.log(queryString);
    return <ErrorPage></ErrorPage>;
  }
  return (
    <div className="w-full">
        <Search invisible="lg"></Search>
      <div className="flex flex-col lg:flex-row gap-2 w-full lg:w-5/6 relative py-4 mx-auto">
        <Sidebar data={data} request={finalQuery}></Sidebar>
        <section className="w-full">
          <TopSection></TopSection>
          <div>
            <Main data={data} query={finalQuery} paginate={paginate}></Main>
          </div>
        </section>
      </div>
    </div>
  );
};
export default page;
