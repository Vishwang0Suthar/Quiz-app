import React, { ReactNode } from "react";

type Props = {
  id: number;
  data: ReactNode;
};

const Options = ({ id, data, ...props }: Props) => {
  return (
    <div>
      {data?.questions[id]?.choices?.map((choices, index) => (
        <div key={index} className="p-4 min-w-60 rounded-md cursor-pointer">
          <p className="text-xl font-semibold text-black  ">{choices}</p>
        </div>
      ))}
    </div>
  );
};

export default Options;
