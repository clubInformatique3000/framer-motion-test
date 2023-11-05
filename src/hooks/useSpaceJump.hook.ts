import { useEffect } from "react";

export function useSpaceJumpHook(callback: () => void, listener: any) {
  const keyDownHandler = (e: KeyboardEvent) => {
    if (e.code === "Space") {
      e.preventDefault();
      callback();
    }
  };

  useEffect(() => {
    window.removeEventListener("keydown", keyDownHandler);
    window.addEventListener("keydown", keyDownHandler);
    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, [listener]);
}
