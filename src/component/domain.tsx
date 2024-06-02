import { title } from "process";
import React, { ReactNode, useState } from "react";
import Options from "./options";

type Props = {
  data: object[];
  domain: number;
};

const Domain = ({ data, domain }: Props) => {
  const [answer, setAnswer] = useState("");
  const [correct, setCorrect] = useState("");
  const handleClick = (index) => {
    const selectedOption = data?.[domain]?.questions[index];
    if (selectedOption?.text === data?.[domain]?.questions[domain]?.answer) {
      setCorrect("Correct!");
    } else {
      setCorrect("Incorrect!");
    }
  };

  return (
    <>
      {data && (
        <div className="flex flex-col flex-1 gap-4 items-center w-fit  justify-center">
          {data?.map((data, id, index) => (
            <>
              {domain == id && (
                <div
                  key={index}
                  className="p-4 min-w-60 rounded-md   shadow-inner  duration-300 bg-green-50"
                  onMouseEnter={() =>
                    setAnswer(`{data?.questions[id]?.answer}`)
                  }
                >
                  <p
                    className="text-xl font-semibold text-black  "
                    //   onClick={() => handleClick(data.title)}
                  >
                    {data?.questions[id]?.text}
                    {/* {domain} */}
                  </p>
                  <div className="flex flex-col gap-2">
                    {data?.questions[id]?.choices?.map((options, index) => (
                      <p
                        key={index}
                        onClick={() => handleClick(index)}
                        className="text-lg cursor-pointer w-fit"
                      >
                        {options.text}
                      </p>
                    ))}
                  </div>
                  <p className="text-bold">{correct}</p>
                </div>
              )}
              <></>
            </>
          ))}
        </div>
      )}
    </>
  );
};

export default Domain;
