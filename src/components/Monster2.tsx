import { SPEObject } from "@splinetool/react-spline";
import { useEffect, useRef, lazy, Suspense } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

export const Monster2 = () => {
  const cube = useRef<SPEObject | null>();

  useEffect(() => {
    console.log(cube.current);
  }, [cube.current]);

  const onLoad = (onLoad: any) => {
    const obj = onLoad.findObjectByName("Cube");

    cube.current = obj;
  };

  return (
    <div>
      <Suspense fallback={<div>carregando...</div>}>
        <Spline
          scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
          onLoad={onLoad}
        />
      </Suspense>
    </div>
  );
};
