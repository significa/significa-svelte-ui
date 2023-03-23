export const pausableTimeout = (node: HTMLElement, ms: number) => {
  const callback = () => {
    node.dispatchEvent(new CustomEvent('timeout'));
  };

  let remaining = ms;
  let now: number;
  let t: NodeJS.Timeout;

  const pause = () => {
    clearTimeout(t);
    remaining -= Date.now() - now;
  };

  const resume = () => {
    now = Date.now();
    t = setTimeout(callback, remaining);
  };

  if (ms > 0) {
    resume();
    node.addEventListener('mouseenter', pause);
    node.addEventListener('mouseleave', resume);
  }

  return {
    update(newMs: number) {
      if (newMs > 0) {
        remaining = newMs;
        resume();
      }
    },
    destroy() {
      clearTimeout(t);
      node.removeEventListener('mouseenter', pause);
      node.removeEventListener('mouseleave', resume);
    }
  };
};
