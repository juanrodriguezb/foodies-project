export default function BlogPostPage({ params }) {
    return (
        <main>
            <h1>Meals Blog Post</h1>
            <p>{params.mealsSlug}</p>
        </main>
    )
}