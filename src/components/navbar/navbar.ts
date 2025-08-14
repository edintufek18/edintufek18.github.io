import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router ,RouterLink} from '@angular/router';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
  imports: [
    CommonModule,
    TranslatePipe,
    RouterLink
],
})
export class Navbar {
  isMenuOpen = false;
toggleMenu() {
   this.isMenuOpen = !this.isMenuOpen;
}
  private translate = inject(TranslateService);
  constructor(private router: Router) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setFallbackLang('en');
    this.translate.use('en');
  }
  goToLibrary() {
    this.router.navigate(['/library']);
  }
  goToAddBook() {
    this.router.navigate(['/add-book']);
  }

  goToEditBook() {
    this.router.navigate(['/edit-book']);
  }

  goToAbout() {
    this.router.navigate(['/about']);
  }

  changeLanguage(lang: string) {
    console.log('Language changed to:', lang);
    this.translate.use(lang);
  }
}
