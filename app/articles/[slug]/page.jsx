import Image from 'next/image'

// Server Component to fetch and display the article
export default async function ArticlePage({ params }) {
  let { slug } = params
  slug = decodeURIComponent(slug) // Decode the URL-encoded slug
  console.log('hello')
  try {
    // Dynamically import the articles.js file to get the articles
    const { articles } = await import('../../articles.js') // Correct path for dynamic import

    // Find the article with the matching slug
    const article = articles.find((a) => {
      return a.slug === slug
    })

    if (!article) {
      return <div className="mt-8">Article not found</div> // If article is not found, return a "not found" message
    }

    return (
      <div className="mt-40">
        <h1 className="text-3xl font-bold text-center mb-8">{article.title}</h1>
        <Image
          src={article.image} // Ensure images are stored in the public folder
          alt={article.title}
          width={800}
          height={600}
        />
        <div
          className="mt-8 px-2 md:px-8 text-lg md:text-2xl leading-8"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    )
  } catch (error) {
    console.error('Error loading article:', error)
    return <div>Article could not be loaded here.</div> // Error handling if articles.js fails to load
  }
}
