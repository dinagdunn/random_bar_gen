import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  arr = [];

  genBarCode() {
  for (let y = 0; y < 7; y++) {
    const randNum = Math.floor(Math.random()*6+1)
    if (randNum === 1)  {
      this.arr.push('#00FFFF');
    }
    else if (randNum === 2) {
      this.arr.push('#00CED1');
    }
    else if (randNum === 3) {
      this.arr.push('#FFF5EE');
    }

    else if (randNum === 4) {
      this.arr.push('#E6E6FA');
    }

    else if (randNum === 5) {
      this.arr.push('#FFC0CB');

    }
    else if (randNum === 6) {
      this.arr.push('#FFD700');

    }
    else if (randNum === 7) {
      this.arr.push('#FFA07A');
    }
  }
}

  ngOnInit() {
    this.genBarCode();
  }
}
