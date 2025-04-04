

interface StateButton {
  type: string;
  click: () => void;
}

function State({ type, click }: StateButton) {
  return (
    <button className="operationBtn" onClick={() => click()}>
      {type}
    </button>
  );
}

export default State;