import { Component, Input,inject } from '@angular/core';
import { ModalController,IonicModule } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common'; 
import {
    TranslateService,
    TranslatePipe,
    TranslateDirective
} from "@ngx-translate/core";


@Component({
  selector: 'app-edit-books-dialog',
  standalone:true,
  imports: [ReactiveFormsModule,CommonModule,IonicModule,TranslatePipe],
  templateUrl: './edit-books-dialog.html',
  styleUrl: './edit-books-dialog.css'
})
export class EditBooksDialog {
   private translate = inject(TranslateService);
   @Input() book!: Book;

  form!: FormGroup;

  constructor(private modalCtrl: ModalController, private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: [this.book?.title, Validators.required],
      author: [this.book?.author, Validators.required],
      genre: [this.book?.genre, [Validators.required]],
    });
  }

save() {
  if (this.form.valid) {
    const updatedBook = {
      ...this.book,         // include original properties (like id)
      ...this.form.value    // override with form changes
    };
    console.log(updatedBook);
    this.modalCtrl.dismiss(updatedBook);
  }
}


  cancel() {
    this.modalCtrl.dismiss(null);
  }

}
