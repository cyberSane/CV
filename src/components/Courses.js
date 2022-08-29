import {RectangleStackIcon, LinkIcon} from "@heroicons/react/24/solid";
import data from "../data.json";

const Courses = () => {
    return <div id="courses">
        <div className="flex items-center mb-2">
            <RectangleStackIcon className="w-4 h-4 mr-1"/>
            <div className="text-l font-medium">Courses</div>
        </div>
        {
            data.courses.map(({name, link}) => {
                return <a href={link} target="_blank" className="flex mb-1 text-sm items-center" rel="noreferrer">
                    <LinkIcon className="w-4 h-4 mr-1"/>
                    <span className="text-white text-opacity-70">{name}</span>
                </a>
            })
        }
    </div>
}

export default Courses