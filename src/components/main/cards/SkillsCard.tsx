
export const SkillsCard = ({rol, technologies, icon}: SkillsCardsProps) => {
  return (
    <div className="flex flex-col items-start bg-[#2D2D2D] space-x-2 rounded-lg p-4 w-full border border-transparent hover:border-green-400 transition-all md:min-h-40 ">
      <div className="flex items-center justify-start space-x-4 w-full">
        {icon}
        <p className="text-2xl text-green-400 font-bold">{rol}</p>
      </div>
      <div className="flex mt-3">
        <ul className="list-disc list-inside">
          {technologies.map((t) => (
            <li className="text-white">{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

interface SkillsCardsProps {
    rol: string
    technologies: string[]
    icon: React.ReactElement
}
