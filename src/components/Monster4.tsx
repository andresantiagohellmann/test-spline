import { Application, SPEObject } from "@splinetool/runtime";
import { useEffect, useRef, useState } from "react";

import ImgThumbsUp from "../assets/thumbsUp.svg";
import ImgThumbsDown from "../assets/thumbsDown.svg";

export const Monster4 = () => {
  const app = useRef<Application>();
  const [bgColor, setBgColor] = useState<"blue" | "green" | "red">("blue");

  useEffect(() => {
    const canvas = document.getElementById("canvas3d") as HTMLCanvasElement;
    app.current = new Application(canvas);
    app.current.load(
      "https://draft.spline.design/ygB-6GjAPS4KbCNl/scene.splinecode"
    );
  }, []);

  const handleReset = () => {
    setTimeout(() => {
      if (!app.current) return;
      app.current.emitEvent("mouseDown", "Button3");
      setBgColor("blue");
    }, 2000);
  };

  const handleClick = () => {
    if (!app.current) return;
    app.current.emitEvent("mouseDown", "Button1");
    setBgColor("green");
    handleReset();
  };

  const handleClick2 = () => {
    if (!app.current) return;
    app.current.emitEvent("mouseDown", "Button2");
    setBgColor("red");
    handleReset();
  };

  return (
    <div
      className={`w-full h-screen flex flex-col justify-center items-center relative`}
    >
      <div
        className={`bg w-full h-screen absolute top-0 left-0 transition duration-500 ${
          bgColor === "blue" && "bg-gradient-to-r from-blue-800 to-indigo-900"
        }  ${
          bgColor === "green" && "bg-gradient-to-r from-emerald-400 to-cyan-400"
        } ${bgColor === "red" && "bg-gradient-to-r from-rose-400 to-red-500"}`}
      ></div>

      <div className="w-[512px] h-[512px]  relative">
        <canvas className="" id="canvas3d"></canvas>
      </div>

      <div className="buttons flex gap-4 relative">
        <button
          onClick={handleClick}
          className="w-[140px] h-auto p-4 flex justify-center item-center bg-green-500 rounded-full"
        >
          <img className="w-8" src={ImgThumbsUp} alt="" />
        </button>

        <button
          onClick={handleClick2}
          className="w-[140px] h-auto p-4  flex justify-center item-center bg-red-500"
        >
          <img className="w-8" src={ImgThumbsDown} alt="" />
        </button>
      </div>
    </div>
  );
};
