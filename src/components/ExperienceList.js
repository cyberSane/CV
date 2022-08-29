import {RectangleGroupIcon, BriefcaseIcon} from "@heroicons/react/24/outline";
import data from '../data.json';

const ExperienceList = () => {
    return <section className="pb-4">
        <div className="flex items-center mb-4 text-blue-600">
            <BriefcaseIcon className="w-6 h-6 mr-2"/>
            <div className="text-2xl font-medium">Experience</div>
        </div>

        {data.experience.map(({company, designation, location, start, end, projects, showProjectLabel}) => {
            return <div className="mb-4">
                <div className="flex justify-between items-start">
                    <div>
                        <div className="text-xl font-medium">{designation}</div>
                        <div className='text-sm'>{company}, {location}</div>
                    </div>
                    <div className='text-xs'>{start} - {end}</div>
                </div>

                <div className="mt-2">
                    {
                        showProjectLabel && <div className='flex items-center text-blue-600'>
                            <RectangleGroupIcon className="w-4 h-4 mr-1"/>
                            <div className="text-sm font-medium">Project</div>
                        </div>
                    }
                    <div className="grid gap-4">
                        {projects.map(({name, details, techStack}) => {
                            return <div>
                                <div className="font-medium">{name}</div>
                                {showProjectLabel && <div className="w-4 h-0.5 bg-blue-600"/>}
                                <div className="ml-10">
                                    <ul className="list-disc mb-2">
                                        {details.map((item) => {
                                            return <li>{item}</li>
                                        })}
                                    </ul>
                                    <div className="text-xs">
                                        <span className="font-medium">Tech Stack: </span>
                                        {techStack.join(', ')}
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>

            </div>
        })}
    </section>
}

export default ExperienceList;