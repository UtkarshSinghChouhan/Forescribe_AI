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
        {/* <div className="relative w-1/6 h-screen"> */}
        <Sidebar />
        {/* </div> */}
        <Content />
      </div>
    </>
  );
};

export default page;
