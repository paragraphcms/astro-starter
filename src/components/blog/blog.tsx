type BlogPost = {
  id: string
  slug: string
  title: string
}

export function Blog({ posts }: { posts: BlogPost[] }) {
  return (
    <main>
      <h1>Blog</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/blog/${post.slug}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </main>
  )
}
