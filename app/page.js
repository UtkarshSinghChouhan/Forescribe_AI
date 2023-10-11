import Content from "@/components/Content";
import Sidebar from "@/components/Sidebar";

const page = () => {
  return (
    <>
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
