import Footer from "../../components/footer";
import Header from "../../components/header";
import Pagenation from "../../components/pagenation";
import { client } from "../../libs/client";
import styles from "../../styles/Home.module.scss";
import Image from 'next/image';

// SSG
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "nexttech", contentId: id });
  console.log(data); // デバッグ用にデータを出力

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
              {item.main && (
                <div
                  dangerouslySetInnerHTML={{ __html: item.main }}
                  className={`${styles.post} ${styles.table}`}
                ></div>
              )}
              {item.image && item.image.length > 0 && (
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src={item.image[0].url}
                    alt="Blog Image"
                    width={item.image[0].width}
                    height={item.image[0].height}
                    className="rounded-lg"
                  />
                  <Image
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
          // If blog.content is not an array, assume it's the main content
          blog.content && (
            <div
              dangerouslySetInnerHTML={{ __html: blog.content }}
              className={`${styles.post} ${styles.table}`}
            ></div>
          )
        )}
            {blog.body && (
          <div
            dangerouslySetInnerHTML={{ __html: blog.body }}
            className={`${styles.post} ${styles.table}`}
          ></div>
        )}
      </main>

      <Pagenation />

      <Footer />
    </>
  );
}
