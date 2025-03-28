import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-dummy',
  standalone: true,
  imports: [HomeComponent,AdminComponent],
  templateUrl: './dummy.component.html',
  styleUrl: './dummy.component.css'
})
export class DummyComponent {

}
