import { faConnectdevelop } from "@fortawesome/free-brands-svg-icons";
import { faPills, faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const features = [
  {
    name: "Clinical Requirements",
    description:
      "This application is a formulary management tool for Clinical Pharmacists. It allows them to view a client's formulary and drugs associated with them and dictate how a member will be able to access those drugs.",
    href: "#",
    icon: faPills,
  },
  {
    name: "End to End",
    description:
      "This application is a shell application that has many different micro front ends/ products across CVS. The end goal of this application is to have a one stop shop so the user doesn't need to access five different links to get their work done when onboarding.",
    href: "#",
    icon: faConnectdevelop,
  },
  {
    name: "Digital Pulse",
    description:
      "This application is a component library similar to Bootstrap in a sense. On this team I create reusable components that other cvs teams will use in their applications. This is so applications across the same tower will have the same look and and cuts down on coding time so they don't have to create components from scratch.  ",
    href: "#",
    icon: faWrench,
  },
];

export default function TeamInfo() {
  return (
    <div className=" py-2 sm:py-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-indigo-600 sm:text-5xl text-center">
            Teams & Responsibilities
          </h2>
          <p className="mt-6 text-center text-lg/8 text-gray-600">
            With CVS Health I have been on three teams so far. <br></br>
            Clinical Requirements, End to End, and Digital Pulse.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="mb-6 flex h-10  items-center justify-center rounded-lg bg-indigo-600">
                    <FontAwesomeIcon
                      icon={feature.icon}
                      style={{ color: "white" }}
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
