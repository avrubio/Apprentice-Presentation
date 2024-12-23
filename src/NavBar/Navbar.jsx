import React from 'react';

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar bg-indigo-200">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Ariadna Vanegas-Rubio
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <details>
              <summary>Learn More!</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <Link to="/skills">Skills & Experience</Link>
                </li>
                <li>
                  <Link to="/overview">
                    Overview of Team & Responsibilities
                  </Link>
                </li>
                <li>
                  <Link to="/talent-success-qualities">
                    Talent Success Qualities
                  </Link>
                </li>
                <li>
                  <Link to="/continuous-learning">
                    Continuous Learning and Growth
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
