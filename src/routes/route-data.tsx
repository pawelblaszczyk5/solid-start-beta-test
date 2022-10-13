import { refetchRouteData, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";

export const routeData = () =>
  createServerData$(
    async () => {
      await new Promise<void>((res) => setTimeout(res, 1000));
      return { test: Math.random() };
    },
    { key: "test" }
  );

const Screen = () => {
  const data = useRouteData<typeof routeData>();

  const refetchData = () => {
    refetchRouteData("test");
  };

  return (
    <>
      <h1>Test {data.latest?.test}</h1>
      <button
        class="py-2 px-4 bg-emerald-400 text-black font-semibold disabled:opacity-40"
        onClick={refetchData}
        disabled={data.state === "refreshing"}
      >
        Refetch
      </button>
    </>
  );
};

export default Screen;
