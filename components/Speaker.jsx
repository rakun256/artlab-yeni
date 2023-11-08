import React from "react";

export default function Speaker ({Name, Title, Image}){
return(
        <div class="flex flex-col justify-between  items-center mb-10">
            <div className=" w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] rounded-full border-8 border-primary-light flex justify-center items-center">
                <img src={Image} alt={Name} className="overflow-hidden" />
            </div>
            <h2 className="mt-6 mb-2">{Name}</h2>
            <h4>{Title}</h4>
        </div>
)
}