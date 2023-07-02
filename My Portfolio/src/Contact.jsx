import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  function sendEmail() {
    var mail = 'mailto:contact@test.com';
    var a = document.createElement('a');
    a.href = mail;
    a.click();
  };

  function openMap(event) {
    event.preventDefault(); // Prevents the default behavior of the anchor tag
    window.open(event.target.href, '_blank');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_nfpjwzd',
        'template_8gju5zv',
        // import.meta.env.service_nfpjwzd,
        // import.meta.env.template_8gju5zv,
        // import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        // import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Thushi",
          from_email: form.email,
          to_email: "naveethusi@gmail.com",
          message: form.message,
        },
        'BEhbVWeQBiBZZzsIe'
        // import.meta.env.BEhbVWeQBiBZZzsIe
        // import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (

    <div className='h-screen w-screen bg-neutral-900 flex'>
      <div className='w-1/2 '>
        <h1 className="text-white  text-7xl md:text-5xl text-center pt-custom md:pt-32 w-custom ">Get in touch</h1>
        <h6 className="text-white-300 w-custom pl-custom5 md:pt-10">Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.</h6>
        <div className="flex md:pl-custom5">
          <div className="md:pt-10 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-auto h-6 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
            </svg>
          </div>
          <a href="https://www.google.com/maps/place/Martigny/@46.1070239,7.0516517,13z/data=!3m1!4b1!4m6!3m5!1s0x478ec83344107147:0xb9571ef432e9fd01!8m2!3d46.1049798!4d7.0755334!16zL20vMDMwODU3?entry=ttu" target="_blank" onclick="openMap(event)" className="text-white-300 w-custom md:pt-11 md:pl-2">Martigny, Switzerland</a>
        </div>

        <div className="flex md:pl-custom5" >
          <div className="md:pt-10 " >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-auto h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>

          </div >
          <a className="text-white-300 w-custom md:pt-11 md:pl-2 cursor-pointer" href="tel:+41782089964">+41 78 208 99 64</a>
        </div>

        <div className="flex md:pl-custom5">
          <div className="md:pt-11 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-auto h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>


          </div>
          <h6 className="text-white-300 w-custom md:pt-11 md:pl-2 cursor-pointer" onClick={sendEmail}>naveethusi@gmail.com</h6>
        </div>

      </div>
      <div className='w-1/2 '>
        <form ref={formRef}
          onSubmit={handleSubmit} class="mx-auto pt-16 max-w-xl sm:pt-20">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div class="sm:col-span-2">
              <label for="name" class="block text-sm font-semibold leading-6 text-white-900">Name</label>
              <div class="mt-2.5">
                <input type="text" name="name" id="name" value={form.name} onChange={handleChange} autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="email" class="block text-sm font-semibold leading-6 text-white-900">Email</label>
              <div class="mt-2.5">
                <input type="email" name="email" id="email" autocomplete="email" value={form.email} onChange={handleChange} class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="message" class="block text-sm font-semibold leading-6 text-white-900">Message</label>
              <div class="mt-2.5">
                <textarea name="message" id="message" value={form.message} onChange={handleChange} rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
              </div>
            </div>

          </div>
          <div class="mt-10">
            <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send Message</button>
          </div>
        </form>
      </div>
      <h6 className="absolute bottom-0 text-center w-full opacity-40 hover:opacity-100 cursor-not-allowed">Copyright © 2023 Thushi</h6>

    </div>
  )
}

export default Contact