

function App() {
  return (
    <div className="main h-screen flex w-full bg-yellow-100">
      <div className=" left h-full text-3xl p-6 text-white w-96 bg-red-500">
        <h2>PROTOFILO.</h2>
      </div>
      <div className="right  h-full  w-3/4 bg-slate-950">
        <div className=" text-2xl ml-80 flex  gap-9 text-white">
          <h3 className="">HOME </h3>
          <h3>ABOUT</h3>
          <h3>WORKS</h3>
          <h3>BLOG</h3>
          <h3>CONTACT</h3>
        </div>
        <img className="h-full w-full" src="images.jpeg" alt="" />

      </div>
    </div>
  );
}


export default App
