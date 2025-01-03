import About from '../components/About'
import ArticlesList from '../components/ArticlesList'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Map from '../components/Map'
import Services from '../components/Services'
import Videos from '../components/Videos'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="px-3 lg:px-20">
        <Services />
        <About />
        <Videos />
        <Blog />
        <ArticlesList />
        <Contact />
        <Map />
      </div>
    </>
  )
}
