import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBooksDialog } from './edit-books-dialog';

describe('EditBooksDialog', () => {
  let component: EditBooksDialog;
  let fixture: ComponentFixture<EditBooksDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBooksDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBooksDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
