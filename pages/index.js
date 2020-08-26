import Head from 'next/head'

import { client } from '@utils/prismicPosts'

import Header from '@components/Header'
import Footer from '@components/Footer'
import Post from '@components/Post'

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Next + Prismic Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div className="posts">
          {posts !== undefined &&
            posts.map((p) => {
              let title = p.title[0].text
              let key = `${p.date}+${title}`
              return <Post key={key} date={p.date} image={p.image} title={title} />
            })}
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .posts {
          display: flex;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps() {
  const res = await client.query('')

  const posts = res.results.map((p) => {
    return p.data
  })

  return {
    props: {
      posts,
    },
  }
}
