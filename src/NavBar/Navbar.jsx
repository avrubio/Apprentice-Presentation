export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Introduction</a>
            </li>
            <li>
              <a>The meets and potatoes</a>
              <ul className="p-2">
                <li>
                  <a>Skills & Experience</a>
                </li>
                <li>
                  <a>Overview of Team & Responsibilities</a>
                </li>
                <li>
                  <a>Talent Success Qualities</a>
                </li>
                <li>
                  <a>Continuous Learning and Growth</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Ariadna Vanegas-Rubio</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Introduction</a>
          </li>
          <li>
            <details>
              <summary>The Good Stuff!</summary>
              <ul className="p-2">
                <li>
                  <a>Skills & Experience</a>
                </li>
                <li>
                  <a>Overview of Team & Responsibilities</a>
                </li>
                <li>
                  <a>Talent Success Qualities</a>
                </li>
                <li>
                  <a>Continuous Learning and Growth</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
}
