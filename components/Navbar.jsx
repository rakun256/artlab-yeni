import React from "react";

export default function Navbar () {
    return (
        <div className="flex w-full flex-row items-center justify-center bg-primary-dark fixed z-10 py-8 text-primary-light border-black border-solid border-b-[1px]">

            <p className="text-lg pl-5 hidden md:block">
              Yıldız Teknik Üniversitesi, 13 Kasım
              </p>
            <a href="https://forms.office.com/pages/responsepage.aspx?id=CClghVvhukORSDi8dzqBbiW71iuprpdGm4fb9lyf0dFUNFVYSzJLR09NNjI5U1I5RExRMjBTRk5DSS4u" 
            className=" rounded-full border-[1px] border-primary-light px-10 md:px-8 min-[768px]:px-auto min-[768px]:w-[150px] lg:px-20 lg:w-auto py-2 text-lg hover:scale-[1.1] hover:bg-primary-light hover:text-primary-dark active:scale-[0.8] transition-all ease mx-20 flex justify-center" target='_blank'>
                Kayıt Ol
                </a>
            <a href="https://maps.app.goo.gl/rfNDFw7kpkF6syJU8" 
            className="text-lg hover:scale-[1.1] active:scale-[0.8] transition-all ease hidden md:block" target='_blank'>
                Davutpaşa Kampüsü, Tarihi Hamam
                </a>
        </div>

    )
}