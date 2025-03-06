import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Bridgelabz';
  logo = "1.jpg.jpg";
  bridgelabzURL="https://www.bridgelabz.com"
  username:string='Your name';
  openBridgeLabz(){
    window.open(this.bridgelabzURL,'_blank')
  }
}
