import data from "../data.json";
import React from "react";
import {LanguageIcon} from "@heroicons/react/24/outline";

const Languages = () => {
    return <div id="languages">
        <div className="flex items-center mb-2">
            <LanguageIcon className="w-4 h-4 mr-1"/>
            <div className="text-l font-medium">Languages</div>
        </div>
        {
            data.personalInfo.languages.map(({name, proficiency}) => {
                return <div className="mb-1 text-sm">
                    {name} <span className="text-white text-opacity-50">({proficiency})</span>
                </div>
            })
        }
    </div>
}

export default Languages;