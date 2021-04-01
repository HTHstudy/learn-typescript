// 타입 추론 기본 1
var a = 10;

function getB(b = 10) {
  var c = 'hi';
  return b;
}

// 타입 추론 기본 2
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }

// var shoppingItem: Dropdown<string> = {
//   value: 'abc',
//   title: 'hello',
// };

// 타입 추론 기본 3
interface Dropdown<T> {
  value: T;
  title: string;
}
interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

var detailedItem: DetailedDropdown<string> = {
  title: 'abc',
  description: 'ab',
  value: 'aaaa',
  tag: 'aaas',
};

// Best Common Type : 타입스크립트가 어떤 타입인지 해석하는 알고리즘?
var arr = [1, 2, true];

