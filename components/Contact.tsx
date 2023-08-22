"use client"
import React, { createRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = createRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e: any) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          from_name: form.name,
          to_name: "OnFocusWeb",
          from_email: form.email,
          to_email: "onfocuswebdev@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="footer font-raleway bg-light-white shadow-lg" id="contact">
      <div className="justify-center my-5">
        <h1 className="text-center leading-[0.8] font-black text-5xl my-5">
          Contact
        </h1>
        <p className="text-center">
          Inspiration and digital strategies combined to give shape to your
          conceptions.<br/> We transform your passions into experiences through the
          power of design.
        </p>
      </div>
      <form
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='font-bold mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-neutral-400 py-4 px-6 placeholder:text-white text-white rounded-lg outline outline-offset-2 outline-1 border border-black font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='font-bold mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-neutral-400 py-4 px-6 placeholder:text-white text-white rounded-lg outline outline-offset-2 outline-1 border border-black font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='font-bold mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-neutral-400 py-4 px-6 placeholder:text-white text-white rounded-lg outline outline-offset-2 outline-1 border border-black font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-neutral-400 hover:bg-neutral-700 py-3 px-8 rounded-xl hover:border border-black w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
    </div>
  );
};

export default Contact;
