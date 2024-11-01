import { Link } from 'react-router-dom';

import {
  AcademicCapIcon,
  ClockIcon,
  HandThumbUpIcon,
  MagnifyingGlassIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid';

import SteveJobs from '../imgs/Stevejobs.webp';

export default function Overview() {
  return (
    <div className="py-10 sm:py-10">
      <div
        aria-hidden="true"
        className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
      ></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-indigo-600 sm:text-5xl text-left">
            Teams & Responsibilities
          </h1>
          <p className="mt-6 text-xl/8 text-gray-700 text-left">
            With CVS Health I have been on three teams so far. <br></br>
            Clinical Formulary Requirements, End to End, and Digital Pulse.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            <figure className="border-l border-indigo-600 pl-8">
              <blockquote className="text-xl/8 font-semibold tracking-tight text-gray-900">
                <p>
                  "Great things in business are never done by one person;
                  they're done by a team of people."
                </p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
                <img
                  alt=""
                  src={SteveJobs}
                  className="mt-1 h-10 w-10 flex-none rounded-full bg-gray-50"
                />
                <div className="text-sm/6">
                  <div className="font-semibold text-gray-900">
                    — Steve Jobs
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="max-w-xl text-base/7 text-gray-700 lg:col-span-7">
            <p>
              With in any of the teams I have been on, I always show up and
              embody these qualities:
            </p>
            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <UserGroupIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Collaboration
                  </strong>{" "}
                  Being up to date with what everyone on your team is doing is
                  crucial to make sure the product you're working on is in sync.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ClockIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Time Management.
                  </strong>{" "}
                  I consistently complete my user stories within the sprint and
                  the allocated story points by prioritizing tasks, breaking
                  them down, and staying organized to ensure timely delivery and
                  maintain team velocity.
                </span>
              </li>
              <li className="flex gap-x-3">
                <HandThumbUpIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Adaptability.
                  </strong>{" "}
                  I am flexible and adaptable to any of the teams I've worked
                  on. There have been moments where I have been asked to work on
                  documentation I have never done before but I accept it as a
                  learning experience and ask for guidance and feedback when I
                  take on new Responsibilities.
                </span>
              </li>
              <li className="flex gap-x-3">
                <MagnifyingGlassIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Attention to detail.
                  </strong>{" "}
                  Precision and thoroughness help avoid bugs, security
                  vulnerabilities, and other costly mistakes in code.
                </span>
              </li>

              <li className="flex gap-x-3">
                <AcademicCapIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Self Development.
                  </strong>{" "}
                  More on this in my Continuous Learning & Growth section!
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <Link
          to="/talent-success-qualities"
          className="text-base font-semibold leading-7 text-indigo-600"
        >
          Learn about my Talent Success Qualities!{" "}
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
