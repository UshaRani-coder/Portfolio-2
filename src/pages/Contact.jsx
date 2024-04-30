import React,{useRef, useState} from "react";
import emailjs from '@emailjs/browser'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import svg from '../assets/contact.png'
function Contact({setShowPopup}) {
  const [nameInputValue, setNameInputValue] = useState(false);
  const [emailInputValue, setEmailInputValue] = useState(false);
  const [messageInputValue, setMessageInputValue] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wjqdv5i', 'template_zrmsjt8', form.current, {
        publicKey: 'fMJACP8tUIDVXg5AP',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset()
          setShowPopup(true)
          toast.success('Message sent', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        },
        (error) => {
          console.log('FAILED...', error.text);
          setShowPopup(false)
        },
      );
      setNameInputValue(false);
    setEmailInputValue(false);
    setMessageInputValue(false);
  };

  return (
    <div>
       <h2 className="contact-heading my-[25px]  md:text-[25px] text-white font-bold text-center">Get in touch</h2>
       <div className="flex flex-col items-center lg:flex-row lg:justify-around lg:items-center lg:mx-[50px] mt-[30px] text-white " id="contact">
    <form ref={form} onSubmit={sendEmail} className="contact w-[80%] flex flex-col lg:w-[35%]">
      <label className="text-[#FF00FF] text-sm mt-[20px] block mb-[5px]">Name</label>
      <input type="text" name="user_name"  onChange={()=>setNameInputValue(true)}  className={` rounded-md ${nameInputValue ? 'gradient-border' : ''}  bg-transparent outline-0  border-[2px] border-white `}/>
      <label className="text-[#FF00FF] text-sm mt-[20px] block mb-[5px]">Email</label>
      <input type="email" name="user_email"  onChange={()=>setEmailInputValue(true)}  className={` rounded-md ${emailInputValue ? 'gradient-border' : ''}  bg-transparent outline-0  border-[2px] border-white `} />
      <label className="text-[#FF00FF] text-sm mt-[20px] block mb-[5px]">Message</label>
      <textarea name="message" rows={'3'}  onChange={()=>setMessageInputValue(true)} className={` rounded-md ${messageInputValue ? 'gradient-border' : ''}  bg-transparent outline-0  border-[2px] border-white `} />
      <button className=" mt-[20px] bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 glow">
           Send Message
        </button>
    </form>
      <img src={svg} alt="thank-you" className="w-[80%] lg:w-[40%]" />
    </div>
    </div>
  );
}

export default Contact;
