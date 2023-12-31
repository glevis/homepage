import React from 'react'

class BlogEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textHidden: true,
            text: "hidden",
            textHeight: "fit",
        }    
    }

    handleClick = () => {
        this.setState({textHidden: !this.state.textHidden})
        if (!this.state.textHidden) {
            this.setState({text: "hidden", textHeight: "fit"})
            console.log("hidden");
        } else {
            this.setState({text: "", textHeight: "screen"})
            console.log("not hidden");
        }
        console.log(this.state.text);
    }
    
    render() {
        return (
            <div className={`cursor-pointer rounded-r-2xl w-2/3 h-${this.state.textHeight} border border-slate-800 border-2 bg-slate-950`} onClick={this.handleClick}>
                <p className="text-gray-100">
                    Title
                </p>
                <div>
                    <p className={`${this.state.text} text-white`}> test</p>
                </div>
            </div>
        )
    }
}

export default BlogEntry
