import Link from "next/link";
import { client } from "../libs/client";
import styles from "../styles/Home.module.scss";
import Header from "../components/header";
import Footer from "../components/footer";
import Genre from "../components/genre";
import Card from "../components/card";
import HomePagenation from "../components/home_pagenation";
import { useState } from "react";
import Hero from "../components/hero";
import Drawer from "../components/drawer";

// SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "nexttech" });
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home({ blog }) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3; // 1ページあたりの投稿数

  // 現在のページに表示する投稿を計算
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blog.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(blog.length / postsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Drawer />
      <Hero/>

      <div className="mx-auto text-center">
        <h1 className="text-6xl font-bold">投稿記事</h1>
      </div>


      
      <div className="mt-8"> {/* ヘッダーとカードの間に上部のマージンを追加 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-12 ">
          {currentPosts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
        <div className="flex justify-center mt-8"> {/* Flexboxを使用して中央揃え */}
          <HomePagenation
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>

      <div className="mt-8"> {/* ジャンルとカードの間に上部のマージンを追加 */}
        <Genre />
      </div>      

      <Footer />
    </>
  );
}

