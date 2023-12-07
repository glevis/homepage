import React from 'react'

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.text = props.text;
        this.title = props.title;
        this.img = props.img;
    }
    render() {
        return (
            <div className='flex border-1 border-white justify-start'>
            <div className="border border-.5 border-slate-800 w-40"> 
                <div className="border border-.5 border-slate-800"> 
                    <p> {this.title} </p>
                </div>
                <img src={this.img}/>
            </div>
            <div className="border border-.5 border-slate-800 w-180">
                <p className="border border-.5 border-slate-800 w-180">{this.text} </p>
            </div>
            </div>
        )
    }
}

export default Project
