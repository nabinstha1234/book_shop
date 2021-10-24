import Http from 'lib/Http';

const http = new Http();

export default class BookService {
  static getBooks() {
    return http.get<any>({
      endpoint: '/list_books',
    });
  }
}
