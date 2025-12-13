import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export function useVanta(effect: any, options: any) {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      const newEffect = effect({
        el: vantaRef.current,
        THREE,
        ...options,
      });
      setVantaEffect(newEffect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return vantaRef;
}
