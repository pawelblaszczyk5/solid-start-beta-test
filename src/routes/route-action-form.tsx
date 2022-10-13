import { Component, createEffect } from "solid-js";
import { useSearchParams } from "solid-start";
import { createServerAction$, redirect } from "solid-start/server";

const Screen: Component = () => {
  const [searchParams] = useSearchParams();
  const [data, trigger] = createServerAction$(async (values: FormData) => {
    await new Promise<void>((res) => setTimeout(res, 1000));

    return redirect(`/route-action-form?value=${values.get("test")}`);
  });

  let formElement: HTMLFormElement | undefined = undefined;

  createEffect(() => {
    if (data.pending === false && formElement) {
      formElement.reset();
    }
  });

  return (
    <>
      <trigger.Form ref={formElement}>
        <input class="border-2 border-dark-400" name="test" />
      </trigger.Form>
      <h1>Hello route action form</h1>
      <p>You submited: {searchParams.value}</p>
    </>
  );
};

export default Screen;
