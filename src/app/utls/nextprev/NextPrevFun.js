const NextPrevFunc = (prevUrl ="/", prevText="Home", nextUrl="/login", nextText="Login") => {
  let template = {
    prev: { prevUrl, prevText },
    next: { nextUrl, nextText },
  };
  return template;
};

export default NextPrevFunc;
