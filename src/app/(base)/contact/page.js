"use client";

import { API } from "@/app/utls/api/API";

const Page = () => {

  const submitForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    let button = form.submit;
    button.innerText = "Sending...";
    const name = form.name.value || "not provided";
    const email = form.email.value;
    const message = form.message.value;

    const data = {
      name: name,
      email: email,
      message: message,
    };
    try {
      let req = await fetch(API + "user/sendMessage", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      let res = await req.json();
      if (res.error) return (button.innerText = "Failed");
      button.innerText = "Message Sent";
      form.reset();
      setTimeout(() => {
        button.innerText = "Send Message";
      }, 2000);
    } catch (error) {
      console.log(error);
      button.innerText = "Failed";
    }
  };

  return (
    <div className="w-full p-3 lg:w-5/6 mx-auto grid grid-cols-5 gap-6">
      <div className="col-span-5 md:col-span-3  sm:rounded-md border p-6">
        <h1 className="text-black text-2xl font-bold  py-6" id="contact">
          Send Us An Message 
          
        </h1>
        <hr className="pl-6 pe-6" />
        <div>
          <div className="" id="contact">
            <form onSubmit={submitForm}>
              <div className="col-span-12 py-2">
                <label className="block font-medium  pb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                  className="mt-1 focus:bg-white bg-slate-100 p-2 focus:border-indigo-200 block w-full shadow-sm sm:text-sm border-slate-200 rounded-md h-12"
                />
              </div>

              <div className="col-span-12 py-2">
                <label className="block text-sm font-medium pb-2">
                  Email address
                </label>
                <input
                  type="text"
                  required
                  name="email"
                  id="email_address"
                  placeholder="Enter Your Email"
                  className="mt-1 focus:bg-white bg-slate-100 p-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-12"
                />
              </div>
              <div className="col-span-12 py-2">
                <label className="pb-2 font-medium ">Description</label>
                <textarea
                  required
                  name="message"
                  rows={8}
                  className="mt-1 focus:bg-white bg-slate-100 p-2 focus:border-indigo-200 block w-full shadow-sm sm:text-sm border-slate-200 rounded-md"
                  placeholder="Your Message For Us"
                ></textarea>
              </div>

              <div className="py-3">
                <button
                  id="submit"
                  type="submit"
                  className="bg-red-500 hover:bg-green-400 rounded px-4 py-3 font-semibold text-white w-full active:scale-90 duration-100"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="col-span-5 md:col-span-2">
        <h1 className="text-black text-2xl font-bold pb-6">Contact Info</h1>
        <section className="flex flex-col gap-3">
          <div className="flex rounded border p-2 flex-col">
            <h2 className="text-lg font-bold pt-3">Call Us</h2>
            <p className="text-gray-700 pt-3">+1 63980 98393, +1 63980 98393</p>
          </div>
          <div className="flex rounded border p-2 flex-col">
            <h2 className="text-lg font-bold pt-3">Email Us</h2>
            <p className="text-gray-700 pt-3">bd.raiyantraders@gmail.com</p>
          </div>
          {/* <div className="flex rounded border p-2 flex-col">
            <h2 className="text-xl font-bold pt-3">Location</h2>
            <p className="text-gray-700 pt-2">123 Digital Avenue, Dhaka</p>
          </div> */}
        </section>

        {/* <div className="pt-14">
                        <h1 className="text-black text-3xl font-bold pb-12">Find Us On</h1>
                        <span><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14607.604248453179!2d90.38425380000001!3d23.750907299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1698685739444!5m2!1sen!2sbd"
                            className="lg:w-[700px] md:w-[700px] lg:h-[500px] md:h-[500px] w-full" allowfullscreen="" loading="lazy"></iframe></span>
                    </div> */}
      </div>
    </div>
  );
};

export default Page;
