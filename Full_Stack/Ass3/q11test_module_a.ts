import { sayHelloFromB } from './q11test_module_b';
export function sayHelloFromA() {
  console.log('Hello from module A');
  sayHelloFromB();
}
