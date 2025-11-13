import React from 'react'
import {Link} from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="px-6 py-10 text-white bg-green-900">
  <div className="grid grid-cols-1 gap-4 mb-8 sm:grid-cols-2 md:grid-cols-5">
    <div>
      <h2 className="text-xl font-bold">SnapCart Green</h2>
      <p className="mt-2 text-sm">Delivering fresh farm produce directly to your home.</p>
    </div>

    <div>
      <h3 className="mb-2 font-semibold">Quick Links</h3>
      <ul className="space-y-1 text-sm">
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/seasonal-picks">Seasonal Picks</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>

    <div>
      <h3 className="mb-2 font-semibold">Help</h3>
      <ul className="space-y-1 text-sm">
        <li><Link to="/faqs">FAQ</Link></li>
        <li><Link to="/return-policy">Return Policy</Link></li>
        <li><Link to="/delivery-info">Delivery Info</Link></li>
        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
      </ul>
    </div>

    <div>
      <h3 className="mb-2 font-semibold">Contact Us</h3>
      <p className="text-sm">📞 +91-98765-43210</p>
      <p className="text-sm">📧 support@snapcartgreen.in</p>
      <div className="flex mt-3 space-x-4 text-xl">
        <Link to="#"><FaFacebookF /></Link>
        <Link to="#"><FaInstagram /></Link>
        <Link to="#"><FaWhatsapp /></Link>
      </div>
    </div>

    <div>
      <h3 className="mb-2 font-semibold"> Google Map</h3>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.4919666961882!2d88.42886674323607!3d22.448139648618607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0273861755e3c1%3A0xdd775694083d9bf6!2sKnowledge%20Manifesto!5e0!3m2!1sen!2sin!4v1751990036753!5m2!1sen!2sin" 
        width="180" 
        height="100" 
        style={{border:0}}
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      >
      </iframe>

    </div>
  </div>

  <hr className="my-4 border-green-700" />
  <p className="text-sm text-center">&copy; {new Date().getFullYear()} SnapCart Green. All rights reserved.</p>
</footer>

)

}

export default Footer