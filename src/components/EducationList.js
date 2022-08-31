import React from "react";
import data from "../utils/dataHandler";
import {AcademicCapIcon} from "@heroicons/react/24/outline";

const EducationList = () => {
    return <div id="education">
        <div className="flex items-center mb-2">
            <AcademicCapIcon className="w-4 h-4 mr-1"/>
            <div className="text-l font-medium">Education</div>
        </div>
        {
            data.education.map(({degree, university, location, start, end}) => {
                return <div className="text-sm flex flex-col mb-4">
                    <span className="font-medium">{degree}</span>
                    <span className="text-xs text-white text-opacity-50">{university}, {location}</span>
                    <span className="text-xs text-white text-opacity-50">{start} - {end}</span>
                </div>
            })
        }
    </div>
}

export default EducationList;