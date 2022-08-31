import PersonalInfo from "./PersonalInfo";
import React from "react";
import ContactInfo from "./ContactInfo";
import EducationList from "./EducationList";
import Languages from "./Languages";
import Courses from "./Courses";
import Skills from "./Skills";

const SideNav = () => {
    return <div className="flex flex-col h-full w-full text-white bg-blue-500">
        <div className="p-4 bg-blue-800">
            <PersonalInfo/>
        </div>
        <div className="grid grid-flow-row gap-6 p-4">
            <ContactInfo/>
            <EducationList/>
            <Languages/>
            <Skills/>
            <Courses/>
        </div>
    </div>
}

export default SideNav;