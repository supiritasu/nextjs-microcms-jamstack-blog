import PostCard from "../../components/PostCard";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Pagenation from "../../components/pagenation";
import { client } from "../../libs/client";
import styles from "../../styles/Home.module.scss";
import { useRouter } from 'next/router';



//SSG
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

export default function BlogId({ blog }) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>{blog.title}</h1>
        <h2 className={styles.category}>{blog.category}</h2>
        <p className={styles.publishedAt}>{blog.publishedAt}</p>
        <p className="text-black mb-4">
          {blog.image && blog.image.url ? (
            <img src={blog.image.url} alt="image" width={blog.image.width} height={blog.image.height} />
          ) : (
            "No image"
          )}
        </p>  

        {Array.isArray(blog.content) ? (
          blog.content.map((item, index) => (
            <div key={index} className={`${styles.post} ${styles.table}`}>
              {item.content && (
                <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
              )}
              {item.image && item.image.length > 0 && (
                <img
                  src={item.image[0].url}
                  alt="Blog Image"
                  width={item.image[0].width}
                  height={item.image[0].height}
                />
              )}
              {item.image && item.image.length > 0 && (
                <img
                  src={item.image[1].url}
                  alt="Blog Image2"
                  width={item.image[1].width}
                  height={item.image[1].height}
                />
              )}
            </div>
          ))
        ) : (
          blog.content && blog.content.content && (
            <div
              dangerouslySetInnerHTML={{ __html: blog.content.content }}
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

      <Pagenation/>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <PostCard key={blog.id} post={blog} />
      </div> */}

      <Footer />
    </>
  );
}
