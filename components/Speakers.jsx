import React from "react";
import Speaker from "./Speaker";

export default function Speakers () {

    return(
        <div className="w-full text-white mt-28 mb-40 p-10 ">
            <h2 className="header-text text-primary-light tracking-[0.5rem] mb-16">
              KONUŞMACILARIMIZ
              </h2>
            <div className="grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-auto">
                <Speaker Name='Speaker Name' Title='Title' Image='?'/>
                <Speaker Name='Speaker Name' Title='Title' Image='?'/>
                <Speaker Name='Speaker Name' Title='Title' Image='?'/>
                <Speaker Name='Speaker Name' Title='Title' Image='?'/>
                <Speaker Name='Speaker Name' Title='Title' Image='?'/>
                <Speaker Name='Speaker Name' Title='Title' Image='?'/>
            </div>
        </div>
    )
}