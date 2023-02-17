import Sidebar from './sidebar';
const sidebar = ({children}) => {
  return (
      <div className="flex ">
        <Sidebar></Sidebar>

        <main className="w-full">
          {/* <Header></Header> */}
          <article className="m-4  ">{children}</article>
        </main>
      </div>
  );
};

export default sidebar;
