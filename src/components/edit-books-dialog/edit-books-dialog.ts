import { Component, Inject, Input, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective,
} from '@ngx-translate/core';
import {
  MatDialogRef,
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatCard } from '@angular/material/card';
import {
  MatCardHeader,
  MatCardTitle,
  MatCardContent,
} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatLabel,MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-edit-books-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    TranslatePipe,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatIcon,
    MatFormField,
    MatLabel,
    MatInputModule, 
  ],
  templateUrl: './edit-books-dialog.html',
  styleUrl: './edit-books-dialog.css',
})
export class EditBooksDialog {

  private translate = inject(TranslateService);
  @Input() book!: Book;

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditBooksDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { this.book = {...data.book}}

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
        ...this.book, // include original properties (like id)
        ...this.form.value, // override with form changes
      };
      console.log(updatedBook);
      this.dialogRef.close(updatedBook);
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}
