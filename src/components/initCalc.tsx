import { useState } from 'react';
import Operator from './operationButton';
import Number from './numberButton';
import Input from './userInput';
import Delete from './deleteAllButton';
import DeleteLast from './deleteLastButton';
import Result from './resultButton';
import Point from './pointButton';
import State from './getStateButton';
import Theme from './themeButton';

function InitCalc() {
  const [str, setStr] = useState("");
  const [states] = useState<string[]>([]);
  const [index, setIndex] = useState(-1);

  const addElement = (elem: string) => {
    setStr((x) => x + elem);
  };

  const clearAll = () => {
    setStr((x) => (x = ""));
  };

  const deleteLast = () => {
    setStr((x) => x.slice(0, -1));
  };

  const getResult = (elem: string) => {
    setStr(() => {
      const newState = elem;
      return newState;
    });
  };

  const nextState = () => {
    if (index + 1 < states.length) {
      setIndex((x) => x + 1);
      setStr(states[index + 1])
    }
  };

  const prevState = () => {
    if (index - 1 >= 0) {
      setIndex((x) => x - 1);
      setStr(states[index - 1]);
    }
  };

  return (
    <div className="body">
      <div className="abs">
        <Theme />
      </div>
      <div className="container">
        <div className="head-block">
          <Input text={str} />
        </div>
        <div className="body-block">
          <div className="body-block_line">
            <Delete click={clearAll} />
            <State type={"prev"} click={prevState} />
            <State type={"next"} click={nextState} />
            <Operator type={"/"} click={addElement} />
          </div>
          <div className="body-block_line">
            <Number type={"7"} click={addElement} />
            <Number type={"8"} click={addElement} />
            <Number type={"9"} click={addElement} />
            <Operator type={"*"} click={addElement} />
          </div>
          <div className="body-block_line">
            <Number type={"4"} click={addElement} />
            <Number type={"5"} click={addElement} />
            <Number type={"6"} click={addElement} />
            <Operator type={"-"} click={addElement} />
          </div>
          <div className="body-block_line">
            <Number type={"1"} click={addElement} />
            <Number type={"2"} click={addElement} />
            <Number type={"3"} click={addElement} />
            <Operator type={"+"} click={addElement} />
          </div>
          <div className="body-block_line">
            <Number type={"0"} click={addElement} />
            <Point type={"."} click={addElement} />
            <DeleteLast click={deleteLast} />
            <Result click={getResult} state={str} list={states} index={index} add={setIndex} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InitCalc;