import { HeaderProps } from "../utils/interfaces";

export function Header({ title }: HeaderProps) {
  return (
    <header className="w-full bg-slate-900 ">
      <h1 className="text-white text-center text-3xl font-bold py-5">
        {title}
      </h1>
    </header>
  );
}
