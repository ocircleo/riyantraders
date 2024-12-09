import { textWash } from "../searchbar/TextFilter";

function queryOrganizer(queryParams) {
  let queryArrayFilter = [
    "inStock",
    "min",
    "max",
    "processor",
    "ram",
    "storage",
    "graphics",
    "page",
    "sort",
    "brand",
    "text",
  ];
  let filteredQuery = {};
  let queryArray = Object.keys(queryParams);
  //filters for unknown parameter passed in the query parameter
  queryArray.forEach((ele) => {
    if (queryArrayFilter.includes(ele)) filteredQuery[ele] = queryParams[ele];
  });
  //the final query object
  let finalQuery = {};
  //transforms query parameter to specified format ex: Array or number also filter the text from some symbols like: <, |, ~
  for (let item in filteredQuery) {
    switch (item) {
      case "inStock":
        finalQuery.inStock = filteredQuery[item] == "true" ? true : false;
        break;
      case "min":
        finalQuery.min = Number(filteredQuery[item])
          ? Number(filteredQuery[item])
          : 0;
        break;
      case "max":
        finalQuery.max = Number(filteredQuery[item])
          ? Number(filteredQuery[item])
          : 1000000;
        break;
      case "processor":
        let processor = filteredQuery[item].split(",");
        finalQuery.processor = processor.map((ele) => ele.toLowerCase());
        break;
      case "ram":
        let ram = filteredQuery[item].split(",");
        finalQuery.ram = ram.map((ele) => Number(ele));
        break;
      case "storage":
        finalQuery.storage = filteredQuery[item].split(",");
        break;
      case "graphics":
        let graphics = filteredQuery[item].split(",");
        finalQuery.graphics = graphics.map((ele) => ele.toLowerCase());
        break;
      case "brand":
        finalQuery.brand = filteredQuery[item];
        break;
      case "text":
        finalQuery.text = textWash(filteredQuery[item]);
        break;
      case "sort":
        if (!Number(filteredQuery[item])) finalQuery.sort = 1;
        else if (Number(filteredQuery[item]) > 0) finalQuery.sort = 1;
        else finalQuery.sort = -1;
        break;
      case "page":
        if (!Number(filteredQuery[item])) finalQuery.page = 0;
        else
          finalQuery.page = Math.abs(Math.trunc(Number(filteredQuery[item])));
        break;
    }
  }
  return finalQuery;
}

export { queryOrganizer };
