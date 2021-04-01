// function logText(text) {
//   console.log(text);
//   return text;
// }

// logText(10);
// logText('하이');
// logText(true);

// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }
// logText<string>('하이');

// function logText(text: string) {
//   console.log(text);
//   text.split('').reverse().join();
//   return text;
// }
// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }
// logText('하이');
// logNumber(10);

// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// const obj: Dropdown = { value: 10, selected: false };
interface Dropdown<T, A> {
  value: T;
  selected: A;
}
const obj: Dropdown<string, boolean> = { value: 'asdas', selected: false };

//제네릭의 타입제한
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length);
//   return text;
// }
// logTextLength('hi');

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}
function logTextLength<T extends LengthType>(text: T): T {
  console.log(text.length);
  return text;
}

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}
// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
