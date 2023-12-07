import profilePic from '../assets/profile_pic_no_bg.png'

export default function HomePage() {
    return (
        <div>
        <div className="transition-opacity flex h-screen justify-center items-center space-x-10">
            <div className="text-xl text-gray-100 justify-center">
            Hello! <br />
            <span className="text-3xl text-blue-400">{'I\'m Gavin Levis'}</span> <br />
            Software Engineer
            </div>
            <img className= "border-4 border-slate-800 object-contain h-80 w-160 bg-slate-400 rounded-3xl" src={profilePic} alt="Gavin Levis"/>
        </div>
        </div>
    )
}
