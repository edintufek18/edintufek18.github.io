import { Component,OnInit,ViewChild,inject} from '@angular/core';
import { BookStorageService } from '../../services/book-storage';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { IonModal } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { EditBooksDialog } from '../edit-books-dialog/edit-books-dialog';
import { ModalController } from '@ionic/angular';
import {
    TranslateService,
    TranslatePipe,
} from "@ngx-translate/core";

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [CommonModule,IonicModule,TranslatePipe],
  templateUrl: './library.html',
  styleUrl: './library.css'
})


export class Library implements OnInit {
    private translate = inject(TranslateService);
    @ViewChild('editModal', { static: true }) editModal!: IonModal;
   books: Book[] = [];
    selectedBook!: Book;
  constructor(private bookService: BookStorageService,private modalCtrl:ModalController) {}

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

async editBook(book: Book) {
  const modal = await this.modalCtrl.create({
    component: EditBooksDialog,
    componentProps: { book },
  });

  await modal.present();

  const { data } = await modal.onDidDismiss();
  if (data) {
    console.log('Updated book:', data);
    this.bookService.updateBook(data.id, data);
    this.loadBooks();
  }
}

}
