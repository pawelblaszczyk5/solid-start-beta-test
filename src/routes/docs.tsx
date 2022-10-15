import { createSignal } from "solid-js";

const Button = (props: { text: string; onClick: () => void }) => (
  <button onClick={props.onClick}>Button {props.text}</button>
);

const Screen = () => {
  const [something, setSomething] = createSignal("");

  return (
    <div>
      <iframe data-why>
        <Button
          onClick={() => setSomething((s) => s + s.length)}
          text={something()}
        />
      </iframe>
    </div>
  );
};

export default Screen;
