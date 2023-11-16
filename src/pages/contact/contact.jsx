import React from 'react'
import "./contact.css"
import { Appnavbar } from '../../components/appnavbar/appnavbar'
import location from "../../components/assets/mynaui_location.png"

export const Contact = () => {
  return (
    <section id='contactpage'>
      <Appnavbar />
      <section className='contactPage'>
        <h2>
          Contact Form
        </h2>
        <div className='mainbox'>
          <div className='contactLeft'>
            <h3>Get intouch with us</h3>
            <form action="" method="post">
              <p>
                <input type="text" name="name" id="name" placeholder='name' />
                <input type="email" name="email" id="email" placeholder='email' />
              </p>
              <p><input type="text" name="subject" id="subject" placeholder='subject' /></p>
              <p className='msg'><input type="text" name="message" className="message" placeholder='message' /></p>
              <button type='submit' className='btn'>Send messsage</button>
            </form>
          </div>
          <div className='contactRight'>
            <h3>Contact Form</h3>
            <div>
              <div className="contactsubbox">
                <span className="flexrows">
                  <img src={location} alt="" />
                  <div>
                    <span>Address : </span>204, West Indies, 21st Street, New York NY 10016
                  </div>
                </span>
                <span className="flexrows">
                  <div>
                    <h1>Need help</h1>
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odi
                    </div>
                  </div>
                </span>
                <span className="flexrows">
                  <img src={location} alt="" />
                  <div>
                    <span>Address : </span>204, West Indies, 21st Street, New York NY 10016
                  </div>
                </span>
                <span className="flexrows">
                  <img src={location} alt="" />
                  <div>
                    <span>Address : </span>204, West Indies, 21st Street, New York NY 10016
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section >
    </section >
  )
}
