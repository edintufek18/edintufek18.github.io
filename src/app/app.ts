import { Component, signal } from '@angular/core';
import { Navbar } from '../components/navbar/navbar';
import { IonicModule } from '@ionic/angular';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Navbar, IonicModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor() {}

  protected readonly title = signal('bookKeeping');
}
