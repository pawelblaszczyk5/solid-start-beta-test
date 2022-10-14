import { Component, createEffect, createMemo, For, on } from "solid-js";
import { FormError } from "solid-start";
import { createServerMultiAction$ } from "solid-start/server";

const Screen: Component = () => {
  // It's currently slightly bugged - https://github.com/solidjs/solid-start/issues/310
  const [data, trigger] = createServerMultiAction$(async (values: FormData) => {
    await new Promise<void>((res) => setTimeout(res, 1000));

    if (Math.random() > 0.5) {
      throw new FormError("test");
    }

    return { test: 5 };
  });

  return (
    <>
      <trigger.Form>
        <input class="border-2 border-dark-400" name="test" />
      </trigger.Form>
      <For each={data}>
        {(object) => (
          <div>
            <span>
              {() =>
                object.result
                  ? object.result.test
                  : object.error
                  ? "Error"
                  : "Pending"
              }
            </span>{" "}
            <button onClick={object.retry}>Resend</button>
          </div>
        )}
      </For>
    </>
  );
};

export default Screen;
