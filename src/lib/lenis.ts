import Lenis from "lenis";

let lenisInstance: any = null;

export function initLenis(options?: Partial<any>) {
  if (typeof window === "undefined") return null;

  if (lenisInstance) return lenisInstance;

  const lenisOptions: any = {
    duration: options?.duration ?? 1.0,
    easing: options?.easing ?? ((t: number) => 1 - Math.pow(1 - t, 3)),
    smoothWheel: true,
    smoothTouch: true,
    wheelMultiplier: options?.wheelMultiplier ?? 0.5,
  };

  lenisInstance = new Lenis(lenisOptions);

  // IMPORTANTE
  lenisInstance.on("scroll", () => {});

  function raf(time: number) {
    lenisInstance.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return lenisInstance;
}

export function getLenis() {
  return lenisInstance;
}
