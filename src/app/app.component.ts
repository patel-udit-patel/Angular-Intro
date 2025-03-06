import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Bridgelabz';
  logo = "1.jpg.jpg";
  bridgelabzURL="https://www.bridgelabz.com"

  openBridgeLabz(){
    window.open(this.bridgelabzURL,'_blank')
  }
}
