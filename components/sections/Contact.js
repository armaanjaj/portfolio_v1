import React from "react";
import ContactLinkCards from "../ContactLinkCards";

function Contact() {
    return (
        <div>
            <div className="flex flex-row justify-between items-center mt-[7rem] text-[44px] font-bold w-[100%]">
                <div className="h-[2px] w-[33%] inline-block bg-[#350078]"></div>
                <div className="inline">Get in touch</div>
                <div className="h-[2px] w-[33%] inline-block bg-[#350078]"></div>
            </div>
            <div className="flex flex-col justify-center items-center mt-[5rem] gap-10">
                <div className="w-[50%] text-[20px]">
                    <p>
                        I would like to listen from you. I am open to new
                        opportunities or for any project collaboration. Ping me
                        if you have any question or if you just want to say hi,
                        I’ll try to my best to get back to you.
                    </p>
                </div>
                <div className="flex flex-row justify-center items-center gap-3 flex-wrap">
                    <ContactLinkCards />
                    <ContactLinkCards />
                    <ContactLinkCards />
                    <ContactLinkCards />
                    <ContactLinkCards />
                </div>
            </div>
        </div>
    );
}

export default Contact;
