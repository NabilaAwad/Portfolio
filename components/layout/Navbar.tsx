import ThemeToggle from "../ThemeToggle";

export default function NavBar() {
  return (
    <>
      <nav
        className=" flex items-center justify-between px-8 py-4
    border-b border-slate-200 dark:border-slate-800
    bg-white dark:bg-slate-950 "
      >
        <div className="flex items-center gap-150 text-slate-900 dark:text-slate-100">
          <h1 className="text-blue-900 font-serif font-bold text-xl dark:text-blue-400">
            Nabila AL Awad
          </h1>
          <ul className="flex gap-8">
            <li className=" hover:text-blue-600  dark:hover:text-blue-400 ">
              <a href="#Home">Home</a>
            </li>
            <li className=" hover:text-blue-600  dark:hover:text-blue-400">
              <a href="#About">About</a>
            </li>
            <li className=" hover:text-blue-600  dark:hover:text-blue-400">
              <a href="#Experience">Experience</a>
            </li>
            <li className=" hover:text-blue-600  dark:hover:text-blue-400">
              <a href="#Projects">Projects</a>
            </li>
            <li className=" hover:text-blue-600  dark:hover:text-blue-400">
              <a href="#Education">Education</a>
            </li>
            <li className=" hover:text-blue-600  dark:hover:text-blue-400">
              <a href="#Skills">Skills</a>
            </li>
            <li className=" hover:text-blue-600  dark:hover:text-blue-400">
              <a href="#Contact">Contact</a>
            </li>
            {/* <li>
              <ThemeToggle />
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}
