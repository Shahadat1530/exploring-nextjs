import blogs from "@/app/data/blogs";

export default function BlogDetails({ params }) {
    const { id } = params;
    const blog = blogs.find(blog => blog.id === id);
    const { title, description } = blog;

    return (
        <div className="p-6 text-center">
            <h3 className="text-2xl font-bold">
                {title}
            </h3>
            <p className="mt-6">
                {description}
            </p>
        </div>
    )
}
