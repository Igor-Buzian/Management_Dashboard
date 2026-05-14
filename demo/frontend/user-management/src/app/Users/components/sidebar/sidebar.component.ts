import {
  Component,
  EventEmitter,
  Output,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SIDEBAR_ITEMS } from './sidebar.config';
import { SidebarAction } from './sidebar.model';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {

  isOpen = signal(false);

  items = SIDEBAR_ITEMS;

  @Output() action = new EventEmitter<SidebarAction>();

  toggle() {
    this.isOpen.set(!this.isOpen());
  }

  close() {
    this.isOpen.set(false);
  }

  onAction(action: SidebarAction) {
    this.action.emit(action);
    this.close();
  }
}
