import { Component,inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule} from '@angular/forms';
import { BookStorageService } from '../../services/book-storage';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import {
    TranslateService,
    TranslatePipe
} from "@ngx-translate/core";


@Component({
  selector: 'app-add-book',
  imports: [CommonModule,ReactiveFormsModule,TranslatePipe],
  templateUrl: './add-book.html',
  styleUrl: './add-book.css'
})
export class AddBook {
    bookForm: FormGroup;
    private translate = inject(TranslateService);
  constructor(private fb: FormBuilder, private bookService: BookStorageService) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['', Validators.required]
    });
  }

  async onSubmit(): Promise<void> {
  if (this.bookForm.valid) {
    const newBook: Book = {
      id: 0, // will be assigned in the service
      ...this.bookForm.value
    };

    this.bookService.addBook(newBook);
    this.bookForm.reset();

    // Show toast
    // const toast = await this.toastController.create({
    //   message: 'Book added successfully!',
    //   duration: 2000,
    //   color: 'success',
    //   position: 'bottom'
    // });

    // await toast.present();
  }
}

  // onSubmit(): void {
  //   if (this.bookForm.valid) {
  //     const newBook: Book = {
  //       id: 0, // will be assigned in the service
  //       ...this.bookForm.value
  //     };

  //     this.bookService.addBook(newBook);
  //     this.bookForm.reset();
      
  //   }
  // }
}
