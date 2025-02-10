import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-bold text-3xl mb-10 text-center">Let's Talk</h1>

        {/* Kontaktinformation */}
        <div className="flex  flex-col  gap-2 bg-slate-100 p-6 rounded-lg shadow-md mb-12 text-left ">
          <p className="mb-5 text-center">
            lorem20 ipsum dolor sit amet consectetur adipisicing elit.lorem
            ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor
            sit amet consectetur adipisicing elit.
          </p>
          <p className="font-medium">
            Email: <span className="">My Email</span>
          </p>
          <p className="font-medium">
            Phone: <span className="">My number</span>
          </p>
        </div>

        {/* Kontaktformulär */}
        <div className="bg-slate-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="font-medium text-lg">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 border border-slate-300 rounded-md"
                placeholder="Your name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className=" font-medium text-lg">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Your email"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className=" font-medium text-lg">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Your message"
              ></textarea>
            </div>

            <div className="text-center">
              <input
                type="submit"
                value="Send Message"
                className="px-6 py-3 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
