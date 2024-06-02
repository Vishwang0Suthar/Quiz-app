"use client";
import Domain from "@/component/domain";
import React, { useEffect, useState } from "react";

type Props = {};

const Quiz = (props: Props) => {
  const [data, setData] = useState(null);
  const [domain, setDomain] = useState(0);
  const [question, setQuestion] = useState("");
  const [click, setClick] = useState(false);
  useEffect(() => {
    fetch("https://znl82lbl3wjg.share.zrok.io/quiz")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  const handleClick = (value) => {
    setDomain(value);
    setClick(true);
  };

  useEffect(() => {
    setQuestion(domain);
  }, [domain]);

  return (
    <section>
      <div className="h-full lg:p-40 p-20 justify-center items-center  lg:gap-2 gap-10 border-2 border-darkGreen-50 shadow-darkGreen-50 rounded-2xl bg-secondary-50 bg-opacity-40 flex-col lg:flex-row flex w-full  text-darkGreen-50">
        <div className="flex flex-col lg:gap-20 gap-5 flex-1   ">
          <p className="lg:text-4xl font-bold text-lg  ">
            Welcome to Frontend Quiz!
          </p>
          <p>Get started by selecting a domain</p>
        </div>{" "}
        {data && (
          <>
            {click ? (
              <>
                <Domain data={data} domain={domain} />
              </>
            ) : (
              <>
                <div className="flex flex-col flex-1 gap-4 items-center w-fit  justify-center">
                  {data?.map((data, index) => (
                    <>
                      <div
                        key={index}
                        className="p-4 min-w-60 rounded-md cursor-pointer hover:scale-110 hover:shadow-lg shadow-inner hover:translate-y-2 duration-300 bg-green-50"
                      >
                        <p
                          className="text-xl font-semibold  "
                          onClick={() => handleClick(data.id)}
                        >
                          {data.title}
                        </p>
                      </div>
                    </>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Quiz;
