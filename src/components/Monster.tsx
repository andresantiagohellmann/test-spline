import { Application, SPEObject } from "@splinetool/runtime";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const Monster = () => {
  const zarkan = useRef<SPEObject | undefined>();

  useEffect(() => {
    // make sure you have a canvas in the body
    const canvas = document.getElementById("canvas3d") as HTMLCanvasElement;

    // start the application and load the scene
    const spline = new Application(canvas);
    spline
      .load("https://prod.spline.design/QpfSaXpxuKg-M8Ai/scene.splinecode")
      .then(() => {
        const obj = spline.findObjectByName("Rotation");

        zarkan.current = obj;
      });
  }, []);

  useEffect(() => {
    const button = document.querySelector(".button") as HTMLButtonElement;

    if (!zarkan.current) {
      console.log("erroooo");
      return;
    }

    button.addEventListener("click", () => {
      gsap.to(zarkan.current!.rotation, {
        x: 0,
        y: 180,
        z: 0,
        duration: 400,
      });
    });
  }, [zarkan.current]);

  useEffect(() => {
    gsap.to(".title", { x: 20 });
  }, []);

  return (
    <>
      <h1 className="title">title</h1>
      <button className="button bg-black text-white p-8">clicar</button>
      <canvas id="canvas3d">Monster</canvas>;
    </>
  );
};
