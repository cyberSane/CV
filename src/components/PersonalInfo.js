import profileImage from "../assets/profile.jpeg";
import data from "../data.json";
import React from "react";
import {MapPinIcon} from "@heroicons/react/24/outline";

const PersonalInfo = () => {
    return <div id="personal-info" className="w-full flex items-center flex-col">
        <div id="photo" className="rounded-full overflow-hidden w-2/4">
            <img src={profileImage} alt="Profile Image"/>
        </div>
        <div id="name" className="text-3xl">{data.personalInfo.name}</div>
        <div id="designation" className="text-white text-opacity-50">{data.experience[0].designation}</div>
        <div className="flex items-center">
            <MapPinIcon className="w-4 h-4 mr-1"/>
            <div id="designation" className="text-sm text-white text-opacity-50">{data.experience[0].location}</div>
        </div>
    </div>
}

export default PersonalInfo;