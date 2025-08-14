import { Component,OnInit,ViewChild,inject} from '@angular/core';
import { BookStorageService } from '../../services/book-storage';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { EditBooksDialog } from '../edit-books-dialog/edit-books-dialog';
import { MatDialog,MatDialogModule } from '@angular/material/dialog';
import {
    TranslatePipe,
} from "@ngx-translate/core";

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [CommonModule,TranslatePipe,MatDialogModule],
  templateUrl: './library.html',
  styleUrl: './library.css'
})


export class Library implements OnInit {
   books: Book[] = [];
  constructor(private bookService: BookStorageService,private dialog:MatDialog) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.books = this.bookService.getBooks();
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id);
    this.loadBooks();
  }

 editBook(book: Book) {
  let modal = this.dialog.open(EditBooksDialog,{
    data:{book: book}
  });
  modal.afterClosed().subscribe(result => {
    if(result){
      this.bookService.updateBook(result.id,result);
      this.loadBooks();
    }    
  } )
}

}
