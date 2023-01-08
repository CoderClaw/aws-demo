// import 'core-js/es/typed-array'; //for internet explorer
// import 'core-js/es/object'; //for internet explorer

(window as any).global = window;
(window as any).process = {
  env: { DEBUG: undefined },
};

(global as any).document = window.document;
(global as any).Event = window.Event;
(global as any).KeyboardEvent = window.KeyboardEvent;
(global as any).MouseEvent = window.MouseEvent;
(global as any).FocusEvent = window.FocusEvent;
(global as any).PointerEvent = window.PointerEvent;
(global as any).HTMLElement = window.HTMLElement;
(global as any).HTMLElement.prototype.getBoundingClientRect = () => {
    return {
      left: '',
      right: '',
      top: '',
      bottom: ''
  };
};

// // If using IgxIconService to register icons
// (global as any).XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// Other optional depending on your application configuration
(global as any).object = window.Object;
(global as any).navigator = window.navigator;
(global as any).localStorage = window.localStorage;
(global as any).DOMTokenList = window.DOMTokenList;