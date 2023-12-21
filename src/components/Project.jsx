import React from 'react'

class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
        this.text = props.text;
        this.title = props.title;
        this.img = props.img;
        this.link = props.link;
    }
    render() {
        return (
            <div onClick={() => {
                window.location = `https://${this.link}`
            }}className="rounded-3xl bg-slate-800 w-52 h-72 hover:scale-110 cursor-pointer">
                <div className='bg-slate-950 w-full h-1/2 rounded-t-3xl'>
                    <img src={this.img} alt={this.title} className="object-contain w-64 h-32 rounded-3xl text-gray-100 text-center"/>
                </div>
                <p className="text-gray-100 p-4">{this.text} </p>
            </div>
        )
    }
}

export default ProjectCard
