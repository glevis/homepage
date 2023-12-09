import ProjectCard from '../components/Project'
import img_test from '../assets/react.svg'

export default function ProjectsPage() {
    return (
        <div className="m-4">
        <div className="flex flex-row flex-wrap justify-center gap-4 space-x-0">
            <ProjectCard link="www.glevis.dev/home" title="Homepage" img={img_test} text="Developed this website using React and Tailwind."/> 
        </div>
        </div>
    );
}
