import { Github, Instagram, Linkedin, Twitter, Plus } from "lucide-react"
import Button from "../ui/Button"

const icons = [Github, Instagram, Linkedin, Twitter, Plus]

export default function UserCard() {
  return (
    <div className="w-[340px] flex flex-col gap-5 items-center p-5 border border-white/10 bg-[#121212] rounded-3xl text-white">
      <div className="size-48">
        <img src="/photo.jpg" alt="Foto do Usuário" className="rounded-full object-cover w-full h-full" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center gap-2">
          <h3 className="text-3xl font-bold min-w-0 overflow-hidden">Username</h3>
        </div>
        <p className="opacity-40">"Alguma descrição interessante"</p>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <span className="uppercase text-xs font-medium">Links</span>
        <div className="flex w-full justify-between">
          {icons.map((Icon, index) => (
            <Button className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]" key={index}>
              <Icon />
            </Button>
          ))}
        </div>
        <div className="flex flex-col gap-3 w-full h-[172px]">
          <div className="w-full flex flex-col items-center gap-3">
            <Button className="w-full">Template SaaS - Compre agora</Button>
            <Button className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]">
              <Plus />
            </Button>
          </div>

        </div>
      </div>
    </div>
  )
}