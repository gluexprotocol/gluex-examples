import type { MetaFunction } from "@remix-run/node";
import { Widget } from "../widget";

export const meta: MetaFunction = () => {
  return [
    { title: "Gluex Widget remix integration" },
    { name: "description", content: "Welcome to Gluex Widget remix integration!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Widget />
    </div>
  );
}
