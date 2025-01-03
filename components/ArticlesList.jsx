'use client' // Ensure this is a client component

import Image from 'next/image'
import Link from 'next/link'
import { articles } from '../app/articles' // Import directly from articles.js

export default function ArticlesList() {
  if (articles.length === 0) {
    return <div>No articles available</div>
  }

  return (
    <div className="min-h-screen h-auto w-full px-4 md:px-0 md:w-3/4 mx-auto">
      <h1 className="text-3xl font-bold text-center">احدث المقالات</h1>
      {articles.map((article) => {
        return (
          <div
            key={article.slug}
            className="flex items-center justify-between gap-4 my-8"
          >
            <div class="bg-green-400 text-white px-4 py-2 rounded-xl">
              {article.id}
            </div>
            <Link
              href={`/articles/${article.slug}`}
              className="text-2xl underline text-blue-500"
            >
              {article.title}
            </Link>
            <Image
              width={100}
              height={100}
              src={article.image}
              alt={article.title}
            />
          </div>
        )
      })}
    </div>
  )
}
