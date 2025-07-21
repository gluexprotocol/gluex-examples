"use client"
import { Widget } from "../components/Widget";
import { Web3Provider } from "../components/Web3Provider";
import { ConnectKitButton } from "connectkit";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Web3Provider>
        <ConnectKitButton />
        <Widget />
      </Web3Provider>
    </div>
  );
}
