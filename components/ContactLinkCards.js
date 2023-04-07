import React from "react";
import MailIcon from "@mui/icons-material/Mail";

function ContactLinkCards() {
    return (
        <div className="flex flex-row justify-between items-center rounded-[5px] bg-[#110036] w-[23%] h-[5rem] p-[1rem] hover:bg-transparent hover:border-[1px] hover:border-solid hover:border-[#350078] hover:cursor-pointer transition-[0.5s]">
            <div className=""><MailIcon/></div>
            <div className="font-bold">armaan.jaj@gmail.com</div>
        </div>
    );
}

export default ContactLinkCards;
