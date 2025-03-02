import Link from 'next/link';
import React from 'react';
import logo from "/public/logo2.png"
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="w-full lg:w-4/5 mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo Section */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <span>
              <Link href={"/"}>
                  <Image alt="Ryan traders logo" src={logo} height={40} width={150} className=" bg-white rounded"></Image>
              </Link>
            </span>
            <p className="text-gray-400">An website for Selling laptops.</p>
            <p className="text-gray-400">Create an account and order a laptop now !!!</p>
          </div>

          {/* Useful Links */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h3 className="text-lg font-semibold text-white mb-4">Useful Links</h3>
            <ul>
              <li className="mb-2"><Link href="/" className="hover:text-white">Home</Link></li>
              <li className="mb-2"><Link href="/itsupport" className="hover:text-white">It Support</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full sm:w-1/3">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <p className="mb-2">123 Digital Avenue, Dhaka</p>
            <p className="mb-2">Email: bd.raiyantraders@gmail.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 mt-8 pt-6">
          <p className="text-sm text-gray-400">&copy; 2024 RaiyanTraders. All rights reserved.</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 sm:mt-0">
     
          
            <a href="#" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.592 0 0 .592 0 1.325v21.351C0 23.408.592 24 1.325 24h11.495V14.708H9.691v-3.647h3.13V8.414c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.462.099 2.793.143v3.237h-1.916c-1.503 0-1.795.714-1.795 1.763v2.313h3.59l-.467 3.647h-3.123V24h6.123C23.408 24 24 23.408 24 22.675V1.325C24 .592 23.408 0 22.675 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;