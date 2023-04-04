import Link from "next/link";

export default function Home() {
  return (
    <>
    <nav className="flex flex-row justify-between p-2 px-5 bg-gray-100">
        <h1 className="text-2xl font-bold font-segoeui text-gray-800">
          GP
        </h1>

        <i className="fas fa-bars text-2xl text-black"></i>
    </nav>
      <header className="flex flex-col justify-center items-center mb-10" style={{
        height: "90vh",
        background: "url('https://cdn.svgator.com/images/2022/06/use-svg-as-background-image-particle-strokes.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        
      }}>
        <section className="flex flex-col items-center">
          <h1 className="text-sm font-bold text-white font-segoeui text-gray-800">
            Hello, I'm Gaurav N V 🫡
          </h1>
          <p className="text-5xl font-black my-5 text-center">
            Software Developer 
          </p>
          <p className="text-gray-400">
            Have a look at my <a className="text-blue-500" href="/projects">projects</a> and <a className="text-blue-500" href="/blog">blog</a>
          </p>
        </section>
        <section className="flex flex-row my-2">
          <button className="bg-blue-600 my-5 font-semibold text-white py-1 px-10 rounded my-2">
            Explore
          </button>
          <Link href="" className="border border-white text-white my-5 font-semibold m-2 text-gray-600 py-1 px-10 rounded my-2">
            <i className="fab fa-github"></i> Github
          </Link>
        </section>
      </header>
      {/* <main className="flex flex-col justify-center items-center" style={{
        height: "90vh",
      }}>
        <h1 className="text-2xl font-bold font-segoeui text-gray-800">
           SKILLS
        </h1>
        <div className="flex flex-row flex-wrap mt-2">
        <div className="bg-gray-200 rounded-full px-3 py-1 m-1">
            <p className="text-gray-600">python</p>
          </div>
        <div className="bg-gray-200 rounded-full px-3 py-1 m-1">
            <p className="text-gray-600">C ++</p>
          </div>
          <div className="bg-gray-200 rounded-full px-3 py-1 m-1">
            <p className="text-gray-600">JavaScript</p>
          </div>
          <div className="bg-gray-200 rounded-full px-3 py-1 m-1">
            <p className="text-gray-600">React</p>
          </div>
          <div className="bg-gray-200 rounded-full px-3 py-1 m-1">
            <p className="text-gray-600">Next.js</p>
          </div>
        </div>
      </main> */}
      {/* <main className="px-5 my-5">
        <h1 className="text-2xl font-bold font-segoeui text-gray-800">
            PROJECTS
        </h1>
        <div className="flex flex-row flex-wrap mt-2">
          <div className="bg-gray-200 rounded-2xl px-3 py-1 m-1">
            <img src="https://images.unsplash.com/photo-1626126090003-8b1b2f1b1b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="project image" className="w-64 h-64 rounded-2xl" />
            <div className="flex flex-row justify-between">
              <p className="text-gray-600 font-bold">GBlog</p>
            </div>
            <p className="text-gray-600">
              A blog made with Next.js and TailwindCSS,

            </p>
            <div className="flex flex-row justify-between">
              <button className="text-xs bg-blue-500 my-5 font-semibold text-white py-1 px-10 rounded my-2">
                <i className="fas fa-arrow-up-right-from-square m-2"></i>view 
              </button>
              <button className="text-xs border border-black my-5 font-semibold m-2 text-gray-600 py-1 px-10 rounded my-2">
                <i className="fab fa-github"></i> Github
              </button>
            </div>
          </div>
          </div>
      </main> */}
    </>
  )
}
