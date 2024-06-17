import Link from "next/link";
import { client } from "../../libs/client";
import styles from "../../styles/Home.module.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Genre from "../../components/genre";
import PostCard from "../../components/PostCard";




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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {blog.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
    <div>aaa</div>
    <img src="https://images.microcms-assets.io/assets/aff5cf34a3414f0eaf69a09c8dd6f7b7/5d266405d20b4fb79f3d32ba49faf8f7/blog15.JPG"></img>

    <Genre/>
    <Footer/>
    </>
  );
}
