const greet = require('./greet');

test('returns hi with name', () => {
  let name = 'Amit'
  expect(greet(name)).toBe(`Hi ${name}`);
});
