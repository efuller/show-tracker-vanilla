import Events from '../Events';

beforeEach(() => {
	Events.events = {};
});

test('Events module should exist', () => {
	expect(Events).not.toEqual({});
});

test('Events module should have an events property', () => {
	expect(Events).toHaveProperty('events');
});

test('Events.on() should add an event to the events property', () => {
	let cb = jest.fn();
	let cb2 = jest.fn();

	Events.on('start', cb);
	expect(Events.events).toHaveProperty('start');
	expect(Events.events.start).toHaveLength(1);
	expect(Events.events.start[0]).toEqual(cb);

	Events.on('start', cb2);
	expect(Events.events.start).toHaveLength(2);
	expect(Events.events.start[1]).toEqual(cb2);
});

test('Events.emit() should call all callbacks for specified event', () => {
	let cb = jest.fn();
	let cb2 = jest.fn();

	Events.on('start', cb);
	Events.on('start', cb2);

	Events.emit('start');
	expect(cb).toHaveBeenCalledTimes(1);
	expect(cb).toHaveBeenCalledTimes(1);
});

test('Events.off() should remove an event and all its callbacks', () => {
	let cb = jest.fn();
	let cb2 = jest.fn();

	Events.on('start', cb);
	Events.on('start', cb2);
	expect(Events.events.start).toHaveLength(2);
	Events.off('start');
	expect(Events.events).not.toHaveProperty('start');
});
