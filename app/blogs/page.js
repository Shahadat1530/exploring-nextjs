import Link from "next/link";
import BlogItem from "../components/BlogItem";
import blogs from "../data/blogs";

export default function BlogsPage() {
    return (
        <div className="p-7">
            <h2 className="text-xl font-bold">
                Blog List
            </h2>
            <div className="mt-6 p-4">
                {blogs.map(blog => (
                    <Link href={`/blogs/${blog.id}`} key={blog.id}>
                        <BlogItem title={blog.title} />
                    </Link>
                ))}
            </div>
        </div>
    )
}
