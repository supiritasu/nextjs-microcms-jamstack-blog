import Link from "next/link";
import { client } from "../../libs/client";
import styles from "../../styles/Home.module.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Genre from "../../components/genre";
import PostCard from "../../components/PostCard";
import BlogList from "../../components/bloglist";
import FilteredBlogList from "../../components/FilteredBlogList";
import Author from "../../components/author";
import Drawer from "../../components/drawer";




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
      {/* <Header /> */}
      <Drawer />
      <div className="mx-auto text-center">
        <h1 className="text-6xl font-bold my-12">記事一覧</h1>
      </div>

      <div className="mt-4 flex flex-col">
        {/* <Drawer /> */}
        <div className="w-full p-4"> {/* ここでmd:ブレークポイント以上の時に表示 */}
          <FilteredBlogList blogs={blog} />
        </div>
      </div>
      <div className="mt-8">
        <Genre />
      </div>
      <Footer />
    </>
  );
}
