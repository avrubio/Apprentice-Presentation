const stats = [
  {
    name: "Integrity",
    stat: "I consistently take accountability for my work and ensure timely completion of all tasks, upholding high standards of responsibility.",
  },
  {
    name: "Communication",
    stat: "Over time, I have developed greater confidence in team meetings, effectively articulating questions and addressing concerns related to user stories and emerging defects.",
  },
  {
    name: "Self-Awareness",
    stat: "I am mindful of both my strengths and areas for growth, actively pursuing courses to bridge skill gaps and enhance my expertise.",
  },
  {
    name: "Collaboration",
    stat: "I regularly share resources with team members and provide support for questions or challenges, particularly around project requirements and integration tests.",
  },
  {
    name: "Aptitude",
    stat: "I engage in continuous learning, with courses in cloud computing and other relevant technologies, preparing to add value to any team by aligning my skills with company needs and tech advancements.",
  },
];
export default function TalentSuccessQualities() {
  return (
    <div>
      <h1 className="text-base font-semibold text-4xl  sm:text-5xl text-indigo-600 py-10">
        Talent Success Qualities
      </h1>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
          >
            <dt className="truncate text-sm font-medium text-gray-500">
              {item.name}
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {item.stat}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
