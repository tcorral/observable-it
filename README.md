# observable-it
observable-it is a library to implement Observable Design Pattern in Browser
that only relays on top of the Event Browser API without implementing anything new
and most important without loops.

## Installation

### Node 

Dependencies:

* node >= 0.10
* npm >= 2.0.0

```bash
npm install observable-it --save
```

### Bower 

```bash
bower install observable-it --save
```

## Usage

### API:

#### Require:

```js
import Observer from './path/to/observable.js';
```

#### Constructor:

```js
import Observer from './path/to/observable.js';

var observer = new Observer();
``` 

#### Subscribe:

```js
import Observer from './path/to/observable.js';

var observer = new Observer();

observer.subscribe('my-event', function (event) {
    console.log('My Event is triggered');
});
``` 

#### Publish without passing data:

```js
import Observer from './path/to/observable.js';

var observer = new Observer();

observer.subscribe('my-event', function (event) {
    console.log('My Event is triggered');
});

observer.publish('my-event');
``` 

#### Publish passing data:

```js
import Observer from './path/to/observable.js';

var observer = new Observer();

observer.subscribe('my-event', function (event) {
    console.log('Data from publish:', event.detail);
});

observer.publish('my-event', { data: 'data-for-my-event' });
``` 

#### Publishing before subscribe:
observable-it will queue all the events when there is no subscribers to that event 
and when publish is done for this event, that event will be triggered.

```
You will never lose an event.
```

```js
import Observer from './path/to/observable.js';

var observer = new Observer();

observer.publish('my-event', { data: 'data-for-my-event' });

observer.subscribe('my-event', function (event) {
    console.log('Data from publish:', event.detail);
});
``` 

## Extending:
observable-it has been designed to extend from it as well, so that you
can easily convert your objects in observable objects too.

### Extending:
```js
import Observer from './path/to/observable.js';

class MyConstructor extends Observer {
    constructor() {
        super();
    }
}

export default MyConstructor;
``` 


To get more information I recommend to read the use cases in tests.

## Tests

To run the tests with QUnit:

```bash
npm install
npm test
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Install jspm
```js
npm install -g jspm
```
4. Commit your changes: `git commit -am 'Add some feature'`
5. Check that it still works: `npm test`
6. Push to the branch: `git push origin my-new-feature`
7. Submit a pull request :D

## History

0.1.0 - First release.

## License

The MIT License (MIT)

Copyright (c) 2016 Tomás Corral

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
