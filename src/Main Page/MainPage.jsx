import CvsLogo from '../imgs/CvsLogo.png';
import InteraptLogo from '../imgs/InteraptTransparentLogo.png';
import headshot from '../imgs/TransparentNewHeadshot (1).png';

export default function MainPage() {
  return (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-300 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 xl:h-[600px] ">
              <img
                alt=""
                src={headshot}
                className="absolute inset-0 h-full w-full object-cover "
              />
              <div className="absolute inset-0  mix-blend-multiply" />
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Introduction
              </p>
              <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                I am <br></br>Ariadna Vanegas-Rubio
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  I'm a Software Engineer Apprentice with CVS Health, and for
                  the duration of my apprenticeship I have been working remotely
                  <br />
                  in New York City
                </p>
              </div>
            </div>
            <dl className="mt-10 grid gap-8 border-t border-gray-900/10 pt-10  justify-center flex">
              <div className="flex space-x-4 ">
                <img src={CvsLogo} alt="" className="image" />
                <img src={InteraptLogo} alt="" className="image" />
              </div>
            </dl>
            <div className="mt-10 flex">
              <a
                href="http://www.invadethecode.com"
                className="text-base font-semibold leading-7 text-indigo-600"
              >
                Learn more about me and my journey!{" "}
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
