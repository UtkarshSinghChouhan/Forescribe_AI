import Content from "@/components/Content";
import Sidebar from "@/components/Sidebar";

const page = () => {
  return (
    <>
      <div className="container flex w-screen h-screen">
        <Sidebar />
        <Content />
      </div>
    </>
  );
};

export default page;
