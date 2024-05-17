import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="bg-black w-full h-screen flex items-center justify-center p-4"
    >
      <form
        action="https://getform.io/f/pbnvnmyb" method="POST"
        className="flex flex-col max-w-[600px] w-full text-gray-300"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Contact
          </p>
          <p className="py-4">
            Submit the form below or shoot my e-mail -fanuelgobrey@gmail.com
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="bg-[#ccd6f6] p-2"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="my-4 p-2 bg-[#ccd6f6]"
        />
        <textarea
          name="message"
          rows="10"
          className="bg-[#ccd6f6] p-2 text-zinc-950"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 py-2 px-6 my-8 mx-auto flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300">
          Let's Colaborate
        </button>
      </form>
    </div>
  );
}

export default Contact;
