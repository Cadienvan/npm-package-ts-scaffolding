import { sayHello } from '.';

it('WILL display "Hello World!!"', () => {
  expect(sayHello()).toBe('Hello World!!');
});
