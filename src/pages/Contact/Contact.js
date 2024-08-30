// import React, { useState } from "react";
// import axios from "axios";
// import "./Contact.css";
// import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
// import { toast } from "react-toastify";
// const Contact = () => {
//   const [name, setName] = useState();
//   const [email, setEmail] = useState();
//   const [msg, setMsg] = useState();

//   const handleSubmit = async (e) => {
//     e?.preventDefault();
//     try {
//       if (!name || !email || !msg) {
//         toast.error("Please fill all the fields", {
//           position: "top-center",
//         });
//       }
//       const res = await axios.post("/api/v1/portfolio/sendEmail", {
//         name,
//         email,
//         msg,
//       });
//       if (res.data.success) {
//         toast.success(res.data.message);
//       } else {
//         toast.error(res.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       {/* <div className="contact"></div> */}

//       <div className="contact text-center column-gap" id="contact">
//         <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Contact</h2>
//         <hr />
//         <div className="card card0 border-0">
//           <div className="row">
//             <div className="col-lg-12 col-md-12 col-sm-12">
//               <div className="card2 d-flex card border-0 px-4 py-5">
//                 <div className="row">
//                   <div className="row icons">
//                     <div className="col-4">
//                       {" "}
//                       <BsLinkedin color="blue" size={30} />
//                     </div>
//                     <div className="col-4">
//                       {" "}
//                       <BsGithub color="black" size={30} />
//                     </div>
//                     <div className="col-4">
//                       {" "}
//                       <BsFacebook color="blue" size={30} />
//                     </div>
//                   </div>
//                   <div className="row px-3 mb-4">
//                     <div className="line" />
//                     <small className="or text-center">OR</small>
//                     <div className="line" />
//                   </div>
//                   <div className="row px-3">
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Enter your Name"
//                       className="mb-3"
//                       minLength={3}
//                       maxLength={20}
//                       pattern="^[a-zA-Z\s]*$"
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                     />
//                   </div>
//                   <div className="row px-3">
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Enter Your Email Address"
//                       className="mb-3"
//                       pattern="/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </div>
//                   <div className="row px-3">
//                     <textarea
//                       type="text"
//                       name="msg"
//                       placeholder="Write your message"
//                       className="mb-3"
//                       minLength={3}
//                       maxLength={50}
//                       pattern="^[a-zA-Z\s]*$"
//                       value={msg}
//                       onChange={(e) => setMsg(e.target.value)}
//                     />
//                   </div>
//                   <div className="row px-3">
//                     <button className="button" onClick={handleSubmit}>
//                       SEND MESSAGE
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;

import React from "react";
import contact from "../../components/contact.json";
import Lottie from "lottie-react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact container section" style={{ padding: "5%" }}>
        <div className="header">
          <h1>Feel free to Contact me</h1>
        </div>
        <div className="contact container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3319.755232607032!2d73.03968347528105!3d33.68940153680292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2s!4v1694362770681!5m2!1sen!2s"
            width="600"
            height="450"
            className="border-0 w-100"
            title="map"
            AllowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="contact___container grid">
          <div className="contact___info">
            <Lottie animationData={contact} />
            {/* <h3 className="contact___title">Let's talk about everything!</h3> */}
            {/* <p className="contact___details">
              Please feel free to contact me if you need any further
              information.
            </p> */}
            {/* <p className='contact___details'>Don't like forms? send me an Email</p> */}
          </div>

          <form action="" className="contact___form">
            <div className="contact___form-group">
              <div className="contact___form-div">
                <input
                  type="text"
                  className="contact___form-input"
                  placeholder="Full Name"
                  required="true"
                />
              </div>

              <div className="contact___form-div">
                <input
                  type="email"
                  className="contact___form-input"
                  placeholder="Your Email"
                  pattern="[a-zA-Z0-9._]+@gmail\.com$"
                  required="true"
                  unique="true"
                />
              </div>
            </div>
            <div className="contact___form-div">
              <input
                type="text"
                className="contact___form-input"
                placeholder="Insert Your Subject"
                required="true"
              />
            </div>
            <div className="contact___form-div contact___form-area">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="contact___form-input"
                placeholder="Write your Message"
                required="true"
              />
            </div>

            <button className="contact-btn">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
