import ProjectCard from '../components/Project'
import img_test from '../assets/react.svg'

export default function ProjectsPage() {
    return (
        <div className="flex gap-8 h-screen justify-center items-center">
            <ProjectCard title="My Homepage" img={img_test} text="Description"/> 
            <ProjectCard title="Flourish" text="Description"/> 
            <ProjectCard title="Luxel" text="Description"/> 
        </div>
    );
}
