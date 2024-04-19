import { Application, SPEObject } from "@splinetool/runtime";
import { useEffect, useRef } from "react";

export const Monster4 = () => {
  const zarkan = useRef<SPEObject | undefined>();
  let app: Application;

  useEffect(() => {
    console.log(zarkan.current);
  }, [zarkan.current]);

  useEffect(() => {
    const canvas = document.getElementById("canvas3d") as HTMLCanvasElement;
    app = new Application(canvas);
    app
      .load("https://prod.spline.design/QpfSaXpxuKg-M8Ai/scene.splinecode")
      .then(() => {
        const obj = app.findObjectByName("Button1");

        zarkan.current = obj;

        console.log(obj);
      });
  }, []);

  const handleClick = () => {
    app.emitEvent("mouseDown", "Button1");
  };

  const handleClick2 = () => {
    app.emitEvent("mouseDown", "Button2");
  };

  return (
    <div className="w-full h-screen bg-black">
      <canvas id="canvas3d"></canvas>

      <button onClick={handleClick} className="w-[200px] h-[40px] bg-green-500">
        girar
      </button>

      <button onClick={handleClick2} className="w-[200px] h-[40px] bg-red-500">
        girar
      </button>
    </div>
  );
};
