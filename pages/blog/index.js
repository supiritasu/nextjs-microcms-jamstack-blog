import Link from "next/link";
import { client } from "../../libs/client";
import styles from "../../styles/Home.module.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Genre from "../../components/genre";
import PostCard from "../../components/PostCard";
import BlogList from "../../components/bloglist";




//SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "nexttech" });
  console.log(data);
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home({ blog }) {
  return (
    <>
    <Header/>
    <div className="mx-auto text-center">
        <h1 className="text-6xl font-bold mt-12">記事一覧</h1>
      </div>
    {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {blog.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div> */}
    <div className="mt-8 ml-10">
        <BlogList blogs={blog} />
    </div>
    <Footer/>
    </>
  );
}
