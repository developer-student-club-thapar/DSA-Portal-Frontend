import React from "react";

const QuestionBar = (props) => {
  return (
    <div className="flex justify-between text-center mt-8 p-4 rounded-xl bg-[#ffffff] bg-opacity-60">
      <div className="text-black text-xl" style={{ flex: "2" }}>
        {props.question}
      </div>
      <div
        className="text-black labels-container text-xl"
        style={{ flex: "1" }}
      >
        Intermediate
      </div>
      <div
        className="text-black labels-container text-xl"
        style={{ flex: "1" }}
      >
        {props.language}
      </div>
    </div>
  );
};

export default QuestionBar;
