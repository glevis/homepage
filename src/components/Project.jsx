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
            }}className="flex flex-col rounded-3xl bg-slate-950 w-64 h-64 hover:scale-110 cursor-pointer">
                <img src={this.img} alt={this.title} className="object-contain w-64 h-32 rounded-3xl"/>
            </div>
        )
    }
}

export default ProjectCard
