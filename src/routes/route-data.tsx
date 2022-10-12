import { useContext } from "solid-js";
import { isServer } from "solid-js/web";
import { useRouteData } from "solid-start";
import { createServerData$, ServerContext } from "solid-start/server";

export const routeData = () =>
  createServerData$((_, event) => {
    return { test: 5 };
  });

const Screen = () => {
  const data = useRouteData<typeof routeData>();

  return <h1>Test {data()?.test}</h1>;
};

export default Screen;
