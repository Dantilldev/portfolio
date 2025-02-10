// import React, {useState} from "react";
// import Link from "next/link";
// import {GiHamburgerMenu} from "react-icons/gi";
// import {AiFillCloseSquare} from "react-icons/ai";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   function handleMenuToggle() {
//     setMenuOpen(!menuOpen);
//   }

//   return (
//     <>
//       <header className="sticky top-0 z-50 bg-white bg-opacity-60 backdrop-blur-sm flex items-center justify-between p-6 shadow-lg">
//         <h1 className="text-2xl">Daniel Tilleria</h1>
//         <nav className="hidden md:flex space-x-4">
//           <Link href="/">Home</Link>
//           <Link href="#projects">Projects</Link>
//           <Link href="#skills">Skills</Link>
//           <Link href="#about-me">About Me</Link>
//           <Link href="/contact">Contact</Link>
//           <Link href="/admin">Admin</Link>
//         </nav>

//         <button
//           className="md:hidden focus:outline-none"
//           onClick={handleMenuToggle}
//         >
//           <GiHamburgerMenu className="text-2xl" />
//         </button>
//       </header>

//       {/* Mobilmeny */}
//       {menuOpen && (
//         <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center p-6">
//           <button
//             className="absolute top-4 right-4 focus:outline-none"
//             onClick={handleMenuToggle}
//           >
//             <AiFillCloseSquare className="text-3xl" />
//           </button>
//           <nav className="flex flex-col items-center space-y-4">
//             <Link href="/">Home</Link>
//             <Link href="#projects">Projects</Link>
//             <Link href="#skills">Skills</Link>
//             <Link href="#about-me">About Me</Link>
//             <Link href="/contact">Contact</Link>
//             <Link href="/admin">Admin</Link>
//           </nav>
//         </div>
//       )}
//     </>
//   );
// }

import React, {useState} from "react";
import Link from "next/link";
import {GiHamburgerMenu} from "react-icons/gi";
import {AiFillCloseSquare} from "react-icons/ai";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuToggle() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-white bg-opacity-60 backdrop-blur-sm flex items-center justify-between p-6 shadow-lg">
        <h1 className="text-2xl">Daniel Tilleria</h1>
        <nav className="hidden md:flex space-x-4">
          <Link href="/">Home</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#about-me">About Me</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/admin">Admin</Link>
        </nav>

        {/* Hamburgar meny */}
        <button
          className="md:hidden focus:outline-none"
          onClick={handleMenuToggle}
        >
          <GiHamburgerMenu className="text-2xl" />
        </button>
      </header>

      {/* Mobilmeny som slidas ner från toppen */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-x-0 top-0 bg-white bg-opacity-60 backdrop-blur-sm z-50 p-6 shadow-lg transition-all duration-300"
          style={{height: "auto", maxHeight: "300px"}} // Justera maxhöjd här
        >
          <button
            className="absolute top-4 right-4 focus:outline-none"
            onClick={handleMenuToggle}
          >
            <AiFillCloseSquare className="text-3xl" />
          </button>
          <nav className="flex flex-col items-center space-y-4 mt-10">
            <Link href="/" onClick={handleMenuToggle}>
              Home
            </Link>
            <Link href="#projects" onClick={handleMenuToggle}>
              Projects
            </Link>
            <Link href="#skills" onClick={handleMenuToggle}>
              Skills
            </Link>
            <Link href="#about-me" onClick={handleMenuToggle}>
              About Me
            </Link>
            <Link href="/contact" onClick={handleMenuToggle}>
              Contact
            </Link>
            <Link href="/admin" onClick={handleMenuToggle}>
              Admin
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
