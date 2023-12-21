import ProjectCard from '../components/Project'
import img_test from '../assets/react.svg'

export default function ProjectsPage() {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-4 space-x-0">
            <ProjectCard link="www.glevis.dev/home" title="Homepage" img={img_test} text="Developed this website using React and Tailwind."/> 
            <ProjectCard link="www.github.com/glevis/encodelog" title="encodelog" text="Wrote a python script tests encoding settings."/>
        </div>
    );
}
