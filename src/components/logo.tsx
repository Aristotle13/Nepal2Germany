import { GraduationCap } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <GraduationCap className="h-7 w-7 text-primary" />
      <span className="font-headline text-xl font-bold text-foreground">
        Study Bridge Germany
      </span>
    </div>
  );
}
