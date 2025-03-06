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
  username:string='';
  nameError:string='';
  
  openBridgeLabz(){
    window.open(this.bridgelabzURL,'_blank')
  }

  onInput(event:Event){
    console.log("Change Event Occured!",event.target);
    const nameRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.username)){
      this.nameError="";
      return;
    }
    this.nameError="Name is Incorrect!";
  }
}
