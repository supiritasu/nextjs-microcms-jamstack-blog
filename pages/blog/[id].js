import PostCard from "../../components/PostCard";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Pagenation from "../../components/pagenation";
import { client } from "../../libs/client";
import styles from "../../styles/Home.module.scss";
import { useRouter } from 'next/router';
import { marked } from 'marked';

// SSG
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "nexttech", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "nexttech" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths,
    fallback: false,
  };
};

const markdownToHtml = (markdown) => {
  return marked(markdown);
};

export default function BlogId({ blog }) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>{blog.title}</h1>
        <h2 className={styles.category}>{blog.category}</h2>
        <p className={styles.publishedAt}>{blog.publishedAt}</p>

        {Array.isArray(blog.content) ? (
          blog.content.map((item, index) => (
            <div key={index} className={`${styles.post} ${styles.table}`}>
              {item.content && (
                <div dangerouslySetInnerHTML={{ __html: markdownToHtml(item.content) }}></div>
              )}
              {item.image && item.image.length > 0 && (
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src={item.image[0].url}
                    alt="Blog Image"
                    width={item.image[0].width}
                    height={item.image[0].height}
                    className="rounded-lg"
                  />
                  <img
                    src={item.image[1].url}
                    alt="Blog Image2"
                    width={item.image[1].width}
                    height={item.image[1].height}
                    className="rounded-lg"
                  />
                </div>
              )}
            </div>
          ))
        ) : (
          blog.content && blog.content.content && (
            <div
              dangerouslySetInnerHTML={{ __html: markdownToHtml(blog.content.content) }}
              className={`${styles.post} ${styles.table}`}
            ></div>
          )
        )}

        {blog.body && (
          <div
            dangerouslySetInnerHTML={{ __html: markdownToHtml(blog.body) }}
            className={`${styles.post} ${styles.table}`}
          ></div>
        )}


          {blog.content && blog.content.content && (
          <div
            dangerouslySetInnerHTML={{ __html: markdownToHtml(blog.content.content) }}
            className={`${styles.post} ${styles.table}`}
          ></div>
        )}
      </main>

      <Pagenation />

      <Footer />
    </>
  );
}