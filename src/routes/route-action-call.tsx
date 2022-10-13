import { Component, createSignal, JSX } from "solid-js";
import { createServerAction$ } from "solid-start/server";

const Screen: Component = () => {
  const [data, trigger] = createServerAction$(async (value: string) => {
    await new Promise<void>((res) => setTimeout(res, 1000));

    return { value };
  });

  const submit: JSX.DOMAttributes<HTMLFormElement>["onSubmit"] = async (
    event
  ) => {
    const form = event.currentTarget;

    event.preventDefault();
    await trigger(new FormData(form).get("test") as string);
    form.reset();
  };

  return (
    <>
      <form onSubmit={submit}>
        <input class="border-2 border-dark-400" name="test" />
      </form>
      <h1>Hello route action form</h1>
      <p>You submited: {data.result?.value}</p>
    </>
  );
};

export default Screen;
