import { Injectable } from '@angular/core';
import { Book } from '../models/book';

const STORAGE_KEY = 'books';

@Injectable({
  providedIn: 'root',
})
export class BookStorageService {
  constructor() {}

  getBooks(): Book[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  saveBooks(books: Book[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
  }

  addBook(book: Book): void {
    const books = this.getBooks();
    book.id = Date.now(); // Simple unique ID
    books.push(book);
    this.saveBooks(books);
  }

  updateBook(id: number, updatedBook: Book): void {
    let books = this.getBooks();
    const index = books.findIndex((b) => b.id === id);
    console.log(index);
    console.log(books)
    if (index !== -1) {
      books[index] = { ...updatedBook, id }; // Ensure the id stays consistent
    }

    this.saveBooks(books);
  }

  deleteBook(id: number): void {
    const books = this.getBooks().filter((book) => book.id !== id);
    this.saveBooks(books);
  }

  getBook(id: number): Book | undefined {
    return this.getBooks().find((book) => book.id === id);
  }
}
