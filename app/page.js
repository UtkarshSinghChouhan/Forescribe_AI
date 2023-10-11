import Content from "@/components/Content";
import Sidebar from "@/components/Sidebar";
import Head from "next/head";

const page = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container flex w-screen h-screen">
        <Sidebar />
        <Content />
      </div>
    </>
  );
};

export default page;
