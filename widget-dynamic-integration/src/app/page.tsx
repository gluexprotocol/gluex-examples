
"use client";

import { DynamicWidget } from "@/lib/dynamic";
import { useDarkMode } from "@/lib/useDarkMode";
import "./page.css";
import { Widget } from "./components/Widget";


export default function Main() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`container ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="modal">
        <DynamicWidget />
        <Widget/>
        {/* <DynamicMethods isDarkMode={isDarkMode} /> */}
      </div>
    </div>
  );
}
