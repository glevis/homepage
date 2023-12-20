import BlogEntry from '../components/BlogEntry'

export default function BlogPage() {
    return (
        <div className="pt-32">
        <div className="m-10 flex flex-col gap-2 justify-center items-center">
            <BlogEntry />
            <BlogEntry />
        </div>
        </div>
    );
}
