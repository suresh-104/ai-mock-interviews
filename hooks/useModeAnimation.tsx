import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

const isBrowser = typeof window !== "undefined";

interface ModeAnimationHook {
  ref: React.RefObject<HTMLButtonElement | null>;
  toggleSwitchTheme: () => Promise<void>;
  isDarkMode: boolean;
}

interface ModeAnimationOptions {
  duration?: number;
  easing?: string;
  pseudoElement?: string;
  globalClassName?: string;
}

export const useModeAnimation = (
  props?: ModeAnimationOptions,
): ModeAnimationHook => {
  const { setTheme, resolvedTheme } = useTheme();
  const {
    duration = 750,
    easing = "ease-in-out",
    pseudoElement = "::view-transition-new(root)",
  } = props || {};

  const [isDarkMode, setIsDarkMode] = useState(
    isBrowser ? resolvedTheme === "dark" : false,
  );
  const ref = useRef<HTMLButtonElement | null>(null);

  const toggleSwitchTheme = async () => {
    if (
      !ref.current ||
      !(document as Document).startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsDarkMode((prev) => !prev);
      return;
    }

    const transition = (document as Document).startViewTransition(() => {
      flushSync(() => {
        setIsDarkMode((prev) => !prev);
      });
    });

    await transition.ready;

    if (ref.current) {
      const { top, left, width, height } = ref.current.getBoundingClientRect();
      const x = left + width / 2;
      const y = top + height / 2;
      const right = window.innerWidth - left;
      const bottom = window.innerHeight - top;
      const maxRadius = Math.hypot(
        Math.max(left, right),
        Math.max(top, bottom),
      );

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration,
          easing,
          pseudoElement,
        },
      );
    }

    setTheme(isDarkMode ? "light" : "dark");
  };

  useEffect(() => {
    // Mettre à jour la couleur du thème
    const metaThemeColor = document.querySelector(
      'meta[name="theme-color"]',
    ) as HTMLMetaElement;
    if (metaThemeColor) {
      metaThemeColor.content = resolvedTheme === "dark" ? "#171717" : "#FFFFFF"; // Ajustez ces couleurs selon vos besoins
    }

    setIsDarkMode(resolvedTheme === "dark");

    // Écoute les changements de thème système
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? "dark" : "light";
      setTheme(newTheme);
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    // Nettoie l'écouteur lors du démontage
    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [resolvedTheme, setTheme]);

  return {
    ref,
    toggleSwitchTheme,
    isDarkMode,
  };
};
