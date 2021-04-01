type Heroes = 'Hulk' | 'Capt' | 'Thor';
type HeroAges = { [K in Heroes]: number };
const ages: HeroAges = {
  Hulk: 33,
  Capt: 100,
  Thor: 1000,
};

// for in 반목문 코드
// var arr = ['a', 'b', 'c'];
// for (var index in arr) {
//   console.log(arr[index]);
// }
