import React from "react";
import data from "../utils/dataHandler";
import {EnvelopeIcon, PhoneIcon} from "@heroicons/react/24/outline";
import github from "../assets/github.svg";
import linkedIn from "../assets/linkedin.svg";

const links = [
    {name: data.contactDetails.email, comp: EnvelopeIcon, url: (link) => `mailto: ${link}`},
    {name: data.contactDetails.phoneNumber, comp: PhoneIcon, url: (link) => `tel:${link}`},
    {name: data.contactDetails.github, comp: (props) => <img {...props} src={github} alt="github"/>, url: (link) => `https://github.com/${link}`},
    {name: data.contactDetails.linkedin, comp: (props) => <img {...props} src={linkedIn} alt="linkedin"/>, url: (link) => `https://www.linkedin.com/in/${link}`}
]

const ContactInfo = () => {

    return <div id="links" className="flex flex-col">
        {
            links.map(({name, comp: Comp, url}) => {
                return <a target="_blank" href={url(name)} className="flex pb-2 items-center" rel="noreferrer">
                    <Comp className="w-4 h-4"/> <span className="flex ml-2 text-sm">{name}</span>
                </a>
            })
        }
    </div>
}

export default ContactInfo;