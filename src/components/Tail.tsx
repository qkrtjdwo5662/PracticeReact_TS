import React, { useState } from 'react'

export default function Tail() {
  const [toggle, setToggle] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setToggle((cur:boolean) => !cur);
  }

  return (
    <nav className='w-auto pl-10 pr-10 bg-slate-100'>
    {/* <div className=' text-pink-500 text-8xl mt-10 font-extrabold'>Tail</div> */}
    <div className="flex justify-between py-5">
      <ul className="flex gap-16">
        <li className="py-2 flex font-extrabold cursor-pointer">
          <svg
          xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 mr-2 text-orange-600"
          >
            <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={2}
               d="M4 6h16M4 12h16M4 18h16"
            /> 
          </svg>
        PARK</li>
        <li className="hidden md:block py-2 font-semibold cursor-pointer text-slate-500">Menu1</li>
        <li className="hidden md:block py-2 font-semibold cursor-pointer text-slate-500">Menu2</li>
        <li className="hidden md:block py-2 font-semibold cursor-pointer text-slate-500">Menu3</li>
        <li className="hidden md:block py-2 font-semibold cursor-pointer text-slate-500">Menu4</li>
      </ul>
      <a href="#"
        className="hidden md:block py-2 px-3 text-white font-bold bg-orange-500 hover:bg-slate-600 rounded duration-300">
        Login
      </a>
      {/* 모바일 메뉴 파트 */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" stroke="currentColor"
            className="w-6 h-6 mr-2 text-orange-600"
            > 
            <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={2}
               d="M4 6h16M4 12h16M4 18h16"
            /> 
          </svg>
        </button>
      </div>
      {/* 모바일 토글 파트 */}
      <div className="md:hidden py-3">
        <a href="#" className="block py-2 px-4 hover:bg-slate-200"> Menu1</a>
        <a href="#" className="block py-2 px-4 hover:bg-slate-200">Menu2</a>
        <a href="#" className="block py-2 px-4 hover:bg-slate-200">Menu3</a> 
      </div>
    </div>
    </nav>
  )
}
