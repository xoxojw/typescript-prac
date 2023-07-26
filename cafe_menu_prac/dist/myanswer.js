"use strict";
// interface User {
//   id: number;
//   name: string;
//   role: 'admin' | 'customer';
// }
// interface Beverage {
//   name: string;
//   price: number;
// }
// interface Order {
//   orderId: number;
//   customerId: number;
//   customerName: string;
//   beverageName: string;
//   status: 'placed' | 'completed' | 'picked-up';
// }
// // 데이터 정의
// let beverages: Beverage[] = [];
// let orders: Order[] = [];
// // 함수 구현
// // 1. 1) 어드민 권한 체크
// const isAdmin = (user: User): boolean => {
//   return user.role === "admin";
// };
// // 1. 2) 고객 권한 체크
// const isCustomer = (user: User): boolean => {
//   return user.role === "customer";
// };
// // 2. 음료 등록 기능 (어드민)
// const addBeverage = (user: User, name: string, price: number): void => {
//   if (!isAdmin(user)) {
//     console.log('음료 등록 권한이 없습니다.');
//     return;
//   }
//   const newBeverage: Beverage = { name, price };
//   beverages.push(newBeverage);
// };
// // 3. 음료 삭제 기능 (어드민)
// const removeBeverage = (user: User, beverageName: string): void => {
//   if (!isAdmin(user)) {
//     console.log('음료 삭제 권한이 없습니다.');
//     return;
//   }
//   beverages = beverages.filter((beverage) => beverage.name !== beverageName)
// };
// // 4. 음료 조회 기능 (어드민, 고객)
// const getBeverages = (user: User): Beverage[] => {
//   if (!user) {
//     return [];
//   }
//   return beverages;
// };
// // 5. 음료 찾기 함수
// // 해당 음료가 있으면 Beverage를 리턴, 없으면 undefined를 리턴
// const findBeverage = (beverageName: string): Beverage | undefined => {
//   return beverages.find((beverage) => beverage.name === beverageName);
// }
// // const findBeverages = (beverageName: string): Beverage[] => {
// //   beverages.filter((beverage) => beverage.name === beverageName)
// //   return beverages;
// // }
// // 6. 음료 주문 기능 (고객)
// const placeOrder = (user: User, beverageName: string): number => {
//   if (!isCustomer(user)) {
//     console.log('관리자는 주문할 수 없습니다.');
//     return -1;
//     // return;
//     // return 타입이 number로 지정되어 있어 숫자값으로 리턴해주어야 함
//     // 주문 실패를 의미하는 -1로 리턴
//   }
//   const beverage = findBeverage(beverageName)
//   if (!beverage) {
//     console.log('해당 음료를 찾을 수 없습니다.');
//     return -1;
//   }
//   const newOrder: Order = {
//     orderId: orders.length + 1,
//     customerId: user.id,
//     customerName: user.name,
//     beverageName,
//     status: 'placed',
//   }
//   orders.push(newOrder);
//   return newOrder.orderId;
// };
// // 7. 음료 준비 완료 기능 (어드민)
// const completeOrder = (user: User, orderId: number): void => {
//   if (!isAdmin(user)) {
//     console.log('관리자 권한이 없습니다.');
//     return;
//   }
//   const thisOrder = orders.find((order) => order.orderId === orderId);
//   if (thisOrder) {
//     thisOrder.status = 'completed',
//       console.log(`[고객 메시지] ${thisOrder.customerName}님이 주문하신 ${thisOrder.beverageName} 나왔습니다!`);
//   }
// };
// // 8. 음료 수령 기능 (고객)
// const pickUpOrder = (user: User, orderId: number): void => {
//   if (!isCustomer(user)) {
//     console.log('권한이 없습니다.');
//     return;
//   }
//   const order = orders.find((order) =>
//       order.orderId === orderId &&
//       order.customerId === user.id
//   )
//   if (order && order.status === 'completed') {
//     order.status = 'picked-up';
//     console.log(`[어드민 메시지] 고객 ID(${order.customerId})님 - 주문 ID(${order.orderId} 수령 완료)`);
//   }
// }
