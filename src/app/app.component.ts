import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title ={
    name: "titulo",
    url: "https://www.ion-book.com"
  };

  getValor():number{
    return 5;
  }

  onShow():void{
    alert("Evento");
  }
}
