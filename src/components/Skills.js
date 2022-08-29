import {BoltIcon} from "@heroicons/react/24/outline";
import data from "../data.json";

const Skills = () => {
    return <div id="skills">
        <div className="flex items-center mb-2">
            <BoltIcon className="w-4 h-4 mr-1"/>
            <div className="text-l font-medium">Skills</div>
        </div>
        {
            data.skills.map(({name, rating}) => {
                return <div className="my-2">
                    <div className="text-sm mb-0.5">{name}</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 bg-gray-700">
                        <div className="bg-white h-2.5 rounded-full" style={{width: `${rating}%`}}/>
                    </div>
                </div>
            })
        }
    </div>
}

export default Skills;