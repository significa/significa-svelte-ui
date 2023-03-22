export function textareaAutoResize(node: HTMLElement) {
  node.style.boxSizing = 'border-box';

  const onInput = () => {
    node.style.height = 'auto';
    node.style.height = node.scrollHeight + (node.offsetHeight - node.clientHeight) + 'px';
  };

  node.addEventListener('input', onInput);

  return {
    destroy() {
      node.removeEventListener('input', onInput);
    }
  };
}
