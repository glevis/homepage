import React from 'react' 

class Navbar extends React.Component {
    render() {
        return (
        <div>
            <div className="flex flex-row gap-8 justify-center bg-slate-950 p-3">
                <div className="font-thin text-2xl text-gray-100">
                    <a href="/home">home</a>
                </div>
                <div className="font-thin text-2xl text-gray-100">
                    <a href="/projects">projects</a>
                </div>
                <div className="font-thin text-2xl text-gray-100">
                    <a href="/blog">blog</a>
                </div>
                <div className="font-thin text-2xl text-gray-100" >
                    <a href="/resume">resume</a>
                </div>
                <div className="font-thin text-2xl text-gray-100" >
                    <a href="/contact">contact</a>
                </div>
            </div>
        </div>
        )
    }
}

export default Navbar
