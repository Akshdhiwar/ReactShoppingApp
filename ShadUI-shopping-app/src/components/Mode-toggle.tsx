import { Moon, Sun } from "lucide-react";

import { Button } from "./ui/button";

import { useTheme } from "../Context/Theme-provider";
import { useState } from "react";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [value, setValue] = useState(
    localStorage.getItem("vite-ui-theme") !== "dark" ? true : false
  );

  function theme() {
    setValue((prev) => !prev);
    if (!value) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full"
      onClick={theme}
    >
      <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
