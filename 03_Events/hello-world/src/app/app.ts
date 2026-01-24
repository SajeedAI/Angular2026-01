import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [FormsModule]
})
export class App {

  // Interploation
  name = "NameOne"
  age = 26

  //property binding
  imageUrl = "https://images.unsplash.com/photo-1768622180477-5043d6dcdfcc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D"
  isDisabled = true

  // Event binding
  message = "Button not clicket yet"

  showMessage(){
    this.message = "Button Clicked"
  }

  //Two way binding
  username = ''

}
