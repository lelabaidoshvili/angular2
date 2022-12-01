import { Component, EventEmitter, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/logging.service';
@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
  providers: [LoggingService]
})


export class BasketComponent implements OnInit {
name = ''
lastName = ''
email = ''
number = 0
myArr = []

// statusUpdated = new EventEmitter<string>();
  constructor(private loggingService: LoggingService) {
  
   }

  ngOnInit(): void {
  }

  onset() {
    console.log(this.loggingService.name)
    this.name = this.loggingService.name
  }

  
  

}
