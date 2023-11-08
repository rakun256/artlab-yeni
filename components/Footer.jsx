import React from "react";

export default function Footer (){
    return(
        <div className="flex w-full py-8 justify-center items-center gap-10 py-10">
            <img
             src="/assets/skylab-logo.svg"
            width={50} height={50} 
            alt="Skylab logo" />

            <img 
            src="/assets/ytu-logo.svg" 
            width={100} height={50} 
            alt="Skylab logo" />
        </div>
    );
};