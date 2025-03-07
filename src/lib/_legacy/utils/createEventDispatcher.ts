/*
 Custom Event Dispatcher
 
 Sets `target` in event data.

 https://svelte.dev/repl/c93cbf99a8ca4f44912e662a8e3cbef7?version=3.37.0

*/

export default function createEventDispatcher() {
  return;
  const component = {};
  return (type: string, target: Element, detail: any) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = new CustomEvent(type, { detail });
      target.dispatchEvent(event);
      callbacks.slice().forEach((fn: (e: Event) => void) => {
        fn.call(component, event);
      });
    }
  };
}
