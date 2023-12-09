import React from 'react'

class BlogEntry extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="rounded-r-2xl w-2/3 h-10 border border-slate-800 border-2 bg-slate-950">
            <p className="text-gray-100">
            Title
            </p>
            </div>
        )
    }
}

export default BlogEntry
