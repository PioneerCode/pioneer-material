import { Component } from '@angular/core';
import { PioneerMaterialDatetimePicker } from '@pioneer-code/pioneer-material-datetime-picker';

@Component({
  selector: 'app-root',
  imports: [PioneerMaterialDatetimePicker],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'docs';
}
