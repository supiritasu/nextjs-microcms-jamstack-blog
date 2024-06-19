import Link from "next/link";
import { client } from "../../libs/client";
import styles from "../../styles/Home.module.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Genre from "../../components/genre";
import PostCard from "../../components/PostCard";
import BlogList from "../../components/bloglist";
import FilteredBlogList from "../../components/FilteredBlogList";
import Aside from "../../components/aside";




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
    
    {/* <div className="mt-8 ml-10">
        <BlogList blogs={blog} />
    </div> */}
      <div className="mt-8 flex flex-col">
        {/* <Aside className="w-full p-4" /> */}
        <FilteredBlogList blogs={blog} className="w-full p-4" />
      </div>

      <div className="mt-8">
        <Genre />
      </div>
    <Footer/>
    </>
  );
}
