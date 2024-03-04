"use client";
import { useEffect } from "react";

// tailwindのspacingに合わせています
// https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale
const headerOffset = 80;

export const NavigateAnchorOnFirstRender = () => {
  useEffect(() => {
    const pageHash = decodeURIComponent(window.location.hash).split("#")[1];
    if (pageHash === undefined) {
      return;
    }

    const targetEl = document.getElementById(pageHash);
    if (targetEl === null) {
      return;
    }

    // アンカーリンクにスクロール後にブラウザのスクロール復元が発火するので、手動制御に切り替える
    window.history.scrollRestoration = "manual";
    const elementPosition = targetEl.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "instant" });
  }, []);

  return <></>;
};
