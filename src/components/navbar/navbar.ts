import { Component, inject } from '@angular/core';
import { IonicModule, MenuController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
  imports: [
    IonicModule,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    TranslatePipe,
  ],
})
export class Navbar {
  private translate = inject(TranslateService);
  constructor(private router: Router,private menu: MenuController) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setFallbackLang('en');
    this.translate.use('en');
  }

   async closeMenu() {
    console.log("is clicked on of the items")
    const isOpen = await this.menu.isOpen();
  
    if (isOpen) {
      await this.menu.close('main');
    }
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

  changeLanguage(event: any) {
    const lang = event.detail.value;
    console.log('Language changed to:', lang);
    this.translate.use(lang);
  }
}
