"use client";
import React, { useEffect, useRef } from "react";

const Pagination = ({ current, paginate }) => {
  const ref = useRef(null);
  const formPaginate = (e) => {
    e.preventDefault();
    const page = e.target.page.value;
    paginate(page);
  };
  useEffect(() => {
    if (ref.current) {
      let form = ref.current;
      form.page.value = current;
    }
  }, [current]);
  return (
    <div className="flex gap-2 mt-2 w-full">
      <button
        onClick={() => paginate(current - 2)}
        className="bg-white border shadow rounded px-3 py-1 font-bold text-lg duration-100 active:scale-90"
      >
        {"<<"}
      </button>
      <button
        onClick={() => paginate(current - 1)}
        className="bg-white border shadow rounded px-3 py-1 font-bold text-lg duration-100 active:scale-90"
      >
        {"<"}
      </button>
      <form ref={ref} onSubmit={formPaginate}>
        <input
          min={0}
          defaultValue={0}
          type="number"
          name="page"
          className="bg-white border border-black shadow rounded px-3 py-1 text-lg w-20"
          placeholder="page"
        ></input>
      </form>
      <button
        onClick={() => paginate(current + 1)}
        className="bg-white border shadow rounded px-3 py-1 font-bold text-lg duration-100 active:scale-90"
      >
        {">"}
      </button>
      <button
        onClick={() => paginate(current + 2)}
        className="bg-white border shadow rounded px-3 py-1 font-bold text-lg duration-100 active:scale-90"
      >
        {">>"}
      </button>
    </div>
  );
};

export default Pagination;

//pagination
//must show button --end x 2
//must show first x 2
//fill
const PageButton = ({ page, length }) => {
  return (
    <button className="bg-white border shadow rounded px-3 py-1 ">
      {page}
    </button>
  );
};
