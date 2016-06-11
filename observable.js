const customEvents = {};
const queuedEvents = {};

function getEvent(name) {
  let event = document.createEvent('Event');
  event.initEvent(name, true, true);
  event.detail = {};

  return event;
}

function getFullEvent(name, handler) {
  var fullEvent = {
    event: getEvent(name),
    handlers: []
  };

  if(handler) {
    fullEvent.handlers.push(handler);
  }
  return fullEvent;
}

class Observable {

  subscribe(name, handler) {
    var event = customEvents[name];
    var queuedEvent = queuedEvents[name];

    if(!event) {
      if(!queuedEvent) {
        customEvents[name] = getFullEvent(name, handler);
      } else {
        customEvents[name] = queuedEvent;
        customEvents[name].handlers.push(handler);
      }
    } else {
      event.handlers.push(handler);
    }

    document.addEventListener(name, handler, false);

    if(queuedEvent) {
      document.dispatchEvent(queuedEvent.event);
      delete queuedEvents[name];
    }
  }

  publish(name, data) {
    var event = customEvents[name];
    if(event) {
      event.event.detail = data || {};
      document.dispatchEvent(event.event);
    } else {
      queuedEvents[name] = getFullEvent(name);
    }
  }

  unsubscribe(name) {
    var event = customEvents[name];
    var queuedEvent = queuedEvents[name];
    if(event) {
      event.handlers.forEach(function (handler) {
        document.removeEventListener(name, handler);
      });
    }
    if(queuedEvent) {
      queuedEvent.handlers.forEach(function (handler) {
        document.removeEventListener(name, handler);
      });
    }
  }
}

export default Observable;
