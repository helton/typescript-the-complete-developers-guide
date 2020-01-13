export type EventHandler = () => void;

export class Eventing {
  private events: { [key: string]: EventHandler[] } = {};

  on = (eventName: string, eventHandler: EventHandler): void => {
    const handlers = this.events[eventName] || [];
    handlers.push(eventHandler);
    this.events[eventName] = handlers;
  };

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach(handler => handler());
  };
}
