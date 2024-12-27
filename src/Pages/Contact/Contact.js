import { useState, useRef } from 'react';
import './Contact.css';
import { send } from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {

  const refCaptcha = useRef();

  const [toSend, setToSend] = useState({
            from_name: '',
            to_name: '',
            message: '',
            reply_to: '',
          });
  const [ReCaptchaValue, setReCaptchaValue] = useState(null)
  const handleReCaptchaChange = (captchaValue) => {
    setReCaptchaValue(captchaValue)
  }
        
          const sendEmail = (captchaValue) => {
            const params = {
              ...toSend,
              'g-recaptcha-response': captchaValue
            }
          
            send(
              'service_4tgx1gt',
              'template_d4y68hq',
              params,
              '3p82pPQGGw838DKuu'
            )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
              window.alert("Your message has been sent. Thank you for your feedback!")
              // disable form
              document.getElementById("your_name").disabled = true;
              document.getElementById("your_email").disabled = true;
              document.getElementById("message").disabled = true;
              document.getElementById("submit").disabled = true;
              document.getElementById("myText").disabled = true;
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });
          }

          const onSubmit = (e) => {
            e.preventDefault();

            const token = ReCaptchaValue; 

            const params = {
              ...toSend,
              'g-recapthca-response': token,
            }
            send(
              'service_4tgx1gt',
              'template_d4y68hq',
              params,
              '3p82pPQGGw838DKuu',
              'g-recaptcha-response'
            )
              .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                window.alert("Your message has been sent. Thank you for your feedback!")
                // disable form
              })
              .catch((err) => {
                console.log('FAILED...', err);
              });
          };
        
          const handleChange = (e) => {
            setToSend({ ...toSend, [e.target.name]: e.target.value });
          };

    return(
        <div className="contact-container">
            <div className="contact">
                <h1>Contact</h1>
                {/* <p className="Contact">Click <a href="mailto:rcjuneau8@gmail.com?subject=Reaching out from your Portfolio site" rel="noreferrer" target="_blank" style={{color: 'white'}}>here</a> to send me an email (mailto)</p> */}
                <p className="Contact">You're welcome to follow me on <a href="https://bsky.app/profile/ejuneau.me" rel="noreferrer" target="_blank" style={{color: 'var(--text-color)'}}>BlueSky</a>, connect with me on <a href="https://linkedin.com/in/e-juneau/" rel="noreferrer" target="_blank" style={{color: 'var(--text-color)'}}>LinkedIn</a>, or you can send me an email via the form below:</p>

                <form onSubmit={onSubmit} className="contact-form">
                 <input
                     id="your_name"
                     type='text'
                     name='from_name'
                     placeholder='Name'
                     value={toSend.from_name}
                     required
                     onChange={handleChange}
                 />
                 <input
                     id="your_email"
                     type='email'
                     name='reply_to'
                     placeholder='Email'
                     pattern="^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$"
                     required
                     value={toSend.reply_to}
                     onChange={handleChange}
                 />
                 <textarea
                     id="message"
                     type='text'
                     name='message'
                     required
                     placeholder='Message'
                     value={toSend.message}
                     onChange={handleChange}
                 />
                  <ReCAPTCHA id="recaptcha" ref={refCaptcha} required sitekey={process.env.REACT_APP_SITE_KEY} onChange={sendEmail}/>
                 <button key="submit" id="submit" type='submit' >Send</button>

                
             </form>

            </div>

        </div>
    )
}







// export default function ContactPage(props) {
//   
//     const [toSend, setToSend] = useState({
//         from_name: '',
//         to_name: '',
//         message: '',
//         reply_to: '',
//       });
    
//       const onSubmit = (e) => {
//         e.preventDefault();
//         send(
//           'service_5ujuq5p',
//           'template_2huvbwp',
//           toSend,
//           '3p82pPQGGw838DKuu'
//         )
//           .then((response) => {
//             console.log('SUCCESS!', response.status, response.text);
//             window.alert("Your message has been sent. Thank you for your feedback!")
//             window.location="/spyglass"
//           })
//           .catch((err) => {
//             console.log('FAILED...', err);
//           });
//       };
    
//       const handleChange = (e) => {
//         setToSend({ ...toSend, [e.target.name]: e.target.value });
//       };

//     return (
//         <div className="ContactPageComponent">
//             <form onSubmit={onSubmit}>
//                 <input
//                     id="your_name"
//                     type='text'
//                     name='from_name'
//                     placeholder='Your name'
//                     value={toSend.from_name}
//                     required
//                     onChange={handleChange}
//                 />
//                 <input
//                     id="your_email"
//                     type='email'
//                     name='reply_to'
//                     placeholder='Your email'
//                     pattern="^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$"
//                     required
//                     value={toSend.reply_to}
//                     onChange={handleChange}
//                 />
//                 <textarea
//                     id="message"
//                     type='text'
//                     name='message'
//                     required
//                     placeholder='Tell me your secrets...'
//                     value={toSend.message}
//                     onChange={handleChange}
//                 />

//                 <motion.button key="submit" id="submit" variants={animations} animate={isHover?"rotate":"none"} onMouseEnter={()=>{setIsHover(true)}} onMouseLeave={()=>{setIsHover(false)}} onTap="rotateSubmit" type='submit'>SEND</motion.button>

                
//             </form>
//             <motion.div key="contactPics" layout className="contactPics">
//               <motion.img key="WLTHFY" 
//               initial={{
//                 clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%", 

//                 rotate: "15deg", 
//                 x: "20vw"}} 

//                 animate={{ 
//                   clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", 
//                   x: 0, 
//                   y: ["-5vh", "-10vh", "-10vh", "0vh"], 
//                   rotate: 0}}

//                 transition={{
//                   clipPath: {delay: 0.9, duration: 0.3}, 
//                   x: {delay: 1, duration: 0.3}, 
//                   y: {
//                     delay: 0.85,
//                     duration: 1,
//                     times: [0, 0.3, 0.8, 1]
//                 }, 
//                   rotate: {delay: 1.65, duration: 0.2}
//                   }}
                  
//                   src={WLTYFY} id="WLTHFY" alt="we'd love to hear from you." />
//               <motion.img key="gramophone" 
//                 animate={{rotate: [0, 20, -10, 0]}} 
//                 transition={{duration: 1, times: [0, 0.8, 0.9, 1]}} src={gramophone}  id="gramophone" alt="vector of a grampohone"/>
//             </motion.div>
            
            
//         </div>
//     )
// }