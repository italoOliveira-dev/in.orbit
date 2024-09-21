import logoInOrbit from '../assets/logo-in-orbit.svg';
import letsStartIllustration from '../assets/lets-start-illustration.svg';
import { Plus } from 'lucide-react';
import { Button } from './ui/button';
import { DialogTrigger } from './ui/dialog';

export function EmpytGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logoInOrbit} alt="in.orbit" />
      <img src={letsStartIllustration} alt="lets start" />
      <p className="text-zinc-300 text-base leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastar um agora mesmo?
      </p>
      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" /> Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  );
}
