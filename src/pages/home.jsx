import profilePic from '../assets/profile_picture.jpeg'
import ProjectCard from '../components/Project'
import img_test from '../assets/react.svg'

export default function HomePage() {
    return (
        <div className="grid grid-cols-5 gap-4 mt-4">
                <div className="justify-self-center col-start-3">
                    <div className="flex rounded-full overflow-hidden w-52 h-52 items-center">
                        <img className="object-contain h-80 w-160" src={profilePic} alt="Gavin Levis"/>
                    </div>
                    <p className="text-center col-start-3 text-3xl text-gray-100"> Gavin Levis</p>
                    <p className="text-center col-start-3 text-xl text-gray-100"> Software Engineer</p>
                </div>
        <div className="col-start-1 flex flex-col w-screen h-auto justify-center items-center bg-slate-900 gap-4">
        <div className="p-4 outline outline-slate-600 rounded-3xl flex flex-col w-2/3 h-auto space-x-10">
            <div className="text-3xl text-gray-100">{">"}Biography</div>
            <div>
                <p className="text-gray-100 text-xl">I{"'"}m a recent (Dec, 2023) Computer Science graduate from The University of Texas at San Antonio. I enjoy programming in all areas of software ranging from Web Development to Embedded Programming.
                    I love working with code ever since I started in 2013. <br /></p><br />
                    <p className="text-gray-100 text-xl">In my free time I explore my musical side. I{"'"}m currently learning guitar whenever possible and I very much enjoy the process. My main instrument is Mellophone.</p>
            </div>
        </div>
        <div className="p-4 outline outline-slate-600 rounded-3xl flex flex-col w-2/3 space-x-10">
            <div className="text-3xl text-gray-100">{">"}Projects</div>
            <div className="flex flex-row flex-wrap justify-evenly">
                <ProjectCard link="www.glevis.dev/home" title="Homepage" img={img_test} text="Developed this website using React and Tailwind."/> 
                <ProjectCard link="www.github.com/glevis/encodelog" title="encodelog" text="Wrote a python script tests encoding settings."/>
            </div>
        </div>
        </div>
        </div>
    )
}
