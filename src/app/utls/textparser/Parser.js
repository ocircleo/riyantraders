const Parser = ({ text }) => {
  let textArr = text.split("\n");
  // let finalText = [];
  // for(let i = 0; i< text.length;i++){
  //  if (ele.includes("http://") || ele.includes("https://")) {
  //     let newArrayOfUrl = ele.split(" ");
  //     newArrayOfUrl.forEach(ele=>{
  //       if(ele.includes("http://") || ele.includes("https://"))
  //     })

  //   }
  // }
  return (
    <div>
      {textArr.map((ele, index) =>
        ele == "" ? (
          <p key={index} className="invisible pointer-events-none">
            space
          </p>
        ) : (
          <p key={index}>{ele}</p>
        )
      )}
    </div>
  );
};

export default Parser;
/**
 * the text will have (text,type,b)
 */
