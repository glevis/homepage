import Project from '../components/Project'
import img_test from '../assets/react.svg'

export default function ProjectsPage() {
    return (
        <div className="grid grid-rows-3 gap-0 justify-center">
            <Project title="My Homepage" img={img_test} text="Description"/> 
            <Project title="Flourish" text="Description"/> 
            <Project title="Luxel" text="Description"/> 
        </div>
    );
}
