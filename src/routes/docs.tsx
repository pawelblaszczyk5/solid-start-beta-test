const Button = () => <button>Test button</button>;

const Screen = () => {
  return (
    <div>
      <iframe data-why>
        <Button />
      </iframe>
    </div>
  );
};

export default Screen;
