import React from 'react'

class BlogEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textHidden: true,
            text: "hidden",
            textHeight: "10",
        }    
    }

    handleClick = () => {
        this.setState({textHidden: !this.state.textHidden})
        if (this.state.textHidden) {
            this.setState({text: "hidden", textHeight: "10"})
            console.log("hidden");
        } else {
            this.setState({text: "", textHeight: "screen"})
            console.log("not hidden");
        }
        console.log(this.state.text);
    }
    
    render() {
        return (
            <div className={`rounded-r-2xl w-2/3 h-${this.state.textHeight} border border-slate-800 border-2 bg-slate-950`} onClick={this.handleClick}>
                <p className="text-gray-100">
                    Title
                </p>
                <p className={this.state.text}> test</p>
            </div>
        )
    }
}

export default BlogEntry
