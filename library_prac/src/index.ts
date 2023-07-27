// 1. Role enum 정의
enum Role {
  LIBRARIAN, // 사서
  MEMBER, // 멤버
}

// 2. User 추상 클래스 정의
// User 클래스는 name, age라는 인자를 받고 getRole이라는 추상 함수를 포함
abstract class User {
  constructor(public name: string, public age: number) {}
  abstract getRole(): Role;
}

// 3. Member 클래스 정의 - Member는 User를 상속받음
class Member extends User {
  constructor(name: string, age: number) {
    // super - 자식 클래스가 부모 클래스를 참조하는데 사용
    super(name, age);
  }
  getRole(): Role {
    return Role.MEMBER;
  }
}

// 4. Librarian 클래스 정의 - Member와 다를게 없지만 Role만 다를뿐
class Librarian extends User {
  constructor(name: string, age: number) {
    // super - 자식 클래스가 부모 클래스를 참조하는데 사용
    super(name, age);
  }
  getRole(): Role {
    return Role.LIBRARIAN;
  }
}

// 5. Book 클래스 정의 - 책은 이름, 저자, 출판일로 구성
class Book {
  constructor(
    public title: string,
    public author: string,
    public publishedDate: Date
  ) {}
}

// 6. RentManager라는 인터페이스 정의 - 도서관이 꼭 갖추어야 할 기능을 정의한 명세서
interface RentManager {
  getBooks(): Book[];
  addBook(user: User, book: Book): void;
  removeBook(user: User, book: Book): void;
  rentBook(user: Member, book: Book): void;
  returnBook(user: Member, book: Book): void;
}

// 7. Library 클래스
// implements : interface로 class의 속성이나 메소드에 제약조건을 추가
class Library implements RentManager {
  private books: Book[] = [];
  // rentedBooks는 유저의 대여 이력을 관리
  private rentedBooks: Map<string, Book> = new Map<string, Book>();

  getBooks(): Book[] {
    // 깊은 복사를 하여 외부에서 books를 수정하는 것을 방지
    // JSON.parse(JSON.stringify(object))
    // 복사할 객체를 String 객체로 변경하고 String 객체를 Json 객체로 변경하면 깊은 복사 가능
    return JSON.parse(JSON.stringify(this.books));
  }

  addBook(user: User, book: Book): void {
    if (user.getRole() !== Role.LIBRARIAN) {
      console.log("사서만 도서를 추가할 수 있습니다.");
      return;
    }

    this.books.push(book);
  }

  removeBook(user: User, book: Book): void {
    if (user.getRole() !== Role.LIBRARIAN) {
      console.log("사서만 도서를 삭제할 수 있습니다.");
      return;
    }

    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

  rentBook(user: User, book: Book): void {
    if (user.getRole() !== Role.MEMBER) {
      console.log("유저만 도서를 대여할 수 있습니다.");
      return;
    }

    if (this.rentedBooks.has(user.name)) {
      console.log(
        `${user.name}님은 이미 다른 책을 대여중이라 빌릴 수 없습니다.`
      );
    } else {
      this.rentedBooks.set(user.name, book);
      console.log(`${user.name}님이 [${book.title}] 책을 빌렸습니다.`);
    }
  }

  returnBook(user: User, book: Book): void {
    if (user.getRole() !== Role.MEMBER) {
      console.log("유저만 도서를 반납할 수 있습니다.");
      return;
    }

    if (this.rentedBooks.get(user.name) === book) {
      this.rentedBooks.delete(user.name);
      console.log(`${user.name}님이 [${book.title}] 책을 반납했어요!`);
    } else {
      console.log(`${user.name}님은 [${book.title}] 책을 빌린적이 없어요!`);
    }
  }
}

// 테스트 코드
const main = () => {
  const myLibrary = new Library();
  const librarian = new Librarian("르탄이", 30);
  const member1 = new Member("예비개발자", 30);
  const member2 = new Member("독서광", 28);

  const book = new Book("TypeScript 문법 종합반", "강창민", new Date());
  const book2 = new Book("금쪽이 훈육하기", "오은영", new Date());
  const book3 = new Book("요식업은 이렇게!", "백종원", new Date());

  myLibrary.addBook(librarian, book);
  myLibrary.addBook(librarian, book2);
  myLibrary.addBook(librarian, book3);
  const books = myLibrary.getBooks();
  console.log("대여할 수 있는 도서 목록:", books);

  myLibrary.rentBook(member1, book);
  myLibrary.rentBook(member2, book2);

  myLibrary.returnBook(member1, book);
  myLibrary.returnBook(member2, book2);
}

main();