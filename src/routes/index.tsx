import { Component, JSXElement } from "solid-js";
import { A } from "solid-start";

const Link: Component<{ href: string; children: JSXElement }> = (props) => (
  <A class="underline text-sky-700" href={props.href}>
    {props.children}
  </A>
);

const Home = () => {
  return (
    <main class="flex flex-col gap-4">
      <Link href="/route-data">Route data</Link>
      <Link href="/route-action-form">Route action form</Link>
    </main>
  );
};

export default Home;
