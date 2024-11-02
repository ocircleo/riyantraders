import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="w-full lg:w-4/5 mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo Section */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <span>

            <Link href={"/"}>
                       <h2 className=" text-3xl font-bold "><span className="text-gray-400">Ryan</span> <span className="text-red-600">Traders</span> </h2>
            </Link>
          </span>
            <p className="text-gray-400">An website for Selling laptops.</p>
            <p className="text-gray-400">Create an account and order a laptop now !!!</p>
          </div>

          {/* Useful Links */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h3 className="text-lg font-semibold text-white mb-4">Useful Links</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-white">Home</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">About Us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full sm:w-1/3">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <p className="mb-2">123 Digital Avenue, Creative City</p>
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
                <path d="M22.23 5.924c-.8.355-1.66.596-2.563.702a4.486 4.486 0 001.962-2.482 9.025 9.025 0 01-2.848 1.086A4.498 4.498 0 0015.47 4a4.496 4.496 0 00-4.498 4.497c0 .353.039.696.114 1.025a12.771 12.771 0 01-9.284-4.713 4.497 4.497 0 001.392 5.992A4.437 4.437 0 012.8 9.704v.057a4.496 4.496 0 003.605 4.406c-.305.084-.627.128-.958.128-.235 0-.465-.023-.688-.066a4.497 4.497 0 004.195 3.118A9.019 9.019 0 011 19.487 12.73 12.73 0 006.88 21c8.286 0 12.813-6.868 12.813-12.815 0-.196-.004-.391-.013-.584A9.157 9.157 0 0024 6.547c-.875.389-1.818.654-2.77.759z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.56c-.885.392-1.834.656-2.828.775a4.933 4.933 0 002.165-2.724 9.885 9.885 0 01-3.13 1.197 4.925 4.925 0 00-8.384 4.49A13.978 13.978 0 011.671 3.149a4.925 4.925 0 001.524 6.573 4.902 4.902 0 01-2.23-.617v.062a4.926 4.926 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.927 4.927 0 004.602 3.419 9.874 9.874 0 01-6.104 2.104c-.396 0-.787-.023-1.175-.068a13.945 13.945 0 007.547 2.21c9.055 0 14.01-7.504 14.01-14.01 0-.213-.005-.426-.014-.638A10.004 10.004 0 0024 4.56z" />
              </svg>
            </a>
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