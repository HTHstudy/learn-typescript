interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
  //   somthing: object;
}

// 1. 상품 목록을 받아오기 위한 API 함수
// function fetchProduct(): Promise<Product[]> {
//   //...
// }

// interface ProductDetail {
//   id: number;
//   name: string;
//   price: number;
// }

// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>;
function displayProductDetail(shoppingItem: ShoppingItem) {}

// 3. 특정 상품 정보를 업데이트(갱신)하는 함수
// interface UpdateProduct { // Partial<Product> 는 UpdateProduct와 동일한 효과
//   id?: number;
//   name?: string;
//   price?: number;
//   brand?: string;
//   stock?: number;
// }

type UpdateProduct = Partial<Product>;
function updateProductItem(productItem: UpdateProduct) {}

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}
// interface UserProfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// } #1
// type UserProfileUpdate = {
//   username?: UserProfile['username'];
//   email?: UserProfile['email'];
//   profilePhotoUrl?: UserProfile['profilePhotoUrl'];
// };

// #2
// type UserProfileUpdate = {
//   [P in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[P];
// };
type UserProfileKeys = keyof UserProfile;

// #3
type UserProfileUpdate = {
  [P in keyof UserProfile]?: UserProfile[P];
};

// #4
type Subset<T> = {
  [P in keyof T]?: T[P];
};
