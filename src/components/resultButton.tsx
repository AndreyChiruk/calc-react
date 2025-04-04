import * as math from 'mathjs';

interface ResultButton {
  click: (elem: string) => void;
  state: string;
  list: string[];
  index: number;
  add: (value: number) => void;
}

function Result({ click, state, list, add }: ResultButton) {
  const transformation = () => {
    try {
      const result = math.evaluate(state);
      if (result === Infinity || result === -Infinity) {
        return "Ошибка: Деление на ноль";
      }
      let buffer: string = String(result);
      list.push(buffer);
      add(list.length);
      return buffer;
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes('Division by zero')) {
          return "Ошибка: Деление на ноль";
        } else {
          return "Ошибка";
        }
      }
      return "Неизвестная ошибка";
    }
  };

  return (
    <button className="operationBtn" onClick={() => click(transformation())}>
      =
    </button>
  );
}

export default Result;