import React from 'react';
import useSwitchStore from '@/hooks/useSwitchStore'; // Certifique-se de importar o hook do arquivo correto

function Switch() {
  const { toggle, setToggle } = useSwitchStore();
  const toggleClass = " transform translate-x-5 bg-white";
  const bgClass = toggle ? "bg-[#0E3043]" : "bg-[#F9C341]";
  const pointColor = toggle ? "bg-white" : "bg-white";

  return (
    <>
      <div className="">
        {/*   Switch Container */}
        <div
          className={"md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer"  +
          " " +
          bgClass 
        }
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {/* Switch */}
          <div
            className={
              "md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
              (toggle ? null : toggleClass) +
              " " +
              pointColor 
            }
          ></div>
        </div>
      </div>
    </>
  );
}

export default Switch;
