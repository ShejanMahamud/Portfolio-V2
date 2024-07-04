import React from 'react'
import HeadingText from '../Utils/HeadingText';

const Contact = () => {
  return (
    <div className="w-[90%] mx-auto relative lg:px-20 px-5 mt-40 min-h-screen">
      <HeadingText bgText={"TOUCH"} topText={"CONTACT"} />
      <p className="text-center text-zinc-300 my-5 lg:text-base md:text-sm text-xs tracking-wider">
        Reach out via fill this form or{" "}
        <a
          className="cursor-pointer hover:bg-gradient-to-r from-violet-700 to-pink-700 px-2 py-1 text-base rounded-sm duration-700"
          href="mailto:dev.shejanamahamud@gmail.com"
        >
          mail
        </a>{" "}
        me
      </p>
      <form className="max-w-xl mx-auto mt-10 space-y-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-zinc-300 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="p-3 rounded-md bg-neutral-800 text-zinc-300 border border-stone-700 focus:outline-none focus:border-violet-700"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-zinc-300 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="p-3 rounded-md bg-neutral-800 text-zinc-300 border border-stone-700 focus:outline-none focus:border-violet-700"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-zinc-300 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="p-3 rounded-md bg-neutral-800 text-zinc-300 border border-stone-700 focus:outline-none focus:border-violet-700"
          ></textarea>
        </div>
        <button
          type="submit"
          className="cursor-pointer bg-gradient-to-r from-violet-700 to-pink-700 px-4 py-2 text-base rounded-md duration-700 hover:scale-105 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
