import EventStream from "./eventstream";
import Property from "./property";
import { Desc } from "./describe";

Property.prototype.toEventStream = function(options) {
  return new EventStream(
    new Desc(this, "toEventStream", []), 
    (sink) => this.dispatcher.subscribe(function(event) { return sink(event.toNext()); }),
    null,
    options
  );
}
