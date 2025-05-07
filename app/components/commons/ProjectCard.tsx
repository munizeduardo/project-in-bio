export default function ProjectCard() {
  return (
    <div className="w-[430px] h-[132px] flex gap-5 bg-background-secondary p-3 rounded-[20px] border border-transparent hover:border-border-secondary">
      <div className="size-24 rounded-md overflow-hidden flex-shrink-0">
        <img
          src="/project1.jpg"
          alt="Project Placeholder 1"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="uppercase text-xs font-bold text-accent-green">
          10 Clicks
        </span>
        <div className="flex flex-col">
          <span className="text-white font-bold text-xl">Projeto 1</span>
          <span className="text-content-body text-sm">Descrição do projeto, certamente é incrível</span>
        </div>
      </div>
    </div>
  )
}