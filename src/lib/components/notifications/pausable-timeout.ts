type Params = { ms: number; reoccuredAt?: number };

export const pausableTimeout = (node: HTMLElement, params: Params) => {
  const callback = () => node.dispatchEvent(new CustomEvent('timeout'));
  let lastParams = params;
  let remaining = params.ms;
  let now: number;
  let t: NodeJS.Timeout;

  const pause = () => {
    clearTimeout(t);
    remaining -= Date.now() - now;
  };

  const resume = () => {
    now = Date.now();

    if (remaining > 0) {
      t = setTimeout(callback, remaining);
    }
  };

  resume();

  node.addEventListener('mouseenter', pause);
  node.addEventListener('mouseleave', resume);

  return {
    update(params: Params) {
      /**
       * Reset the timeout if the time has changed or if the notification has reocurred.
       */
      if (params.ms !== lastParams.ms || params.reoccuredAt !== lastParams.reoccuredAt) {
        pause();
        lastParams = params;
        remaining = params.ms;

        // check if mouse is still over the notification
        if (!node.matches(':hover')) {
          resume();
        }
      }
    },
    destroy() {
      clearTimeout(t);
      node.removeEventListener('mouseenter', pause);
      node.removeEventListener('mouseleave', resume);
    }
  };
};
