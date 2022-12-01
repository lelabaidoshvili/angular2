import { Component, OnInit, EventEmitter } from '@angular/core';
import { LoggingService } from 'src/app/logging.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [LoggingService]
})
export class UserComponent implements OnInit {
  firstName = 'Your Firstname...';
  lastName = 'Your Lastname...'
  formArr: Array<any>

  
  constructor(private loggingService: LoggingService) { 
    
    
    }

    onSetTo() {
      console.log(this.loggingService)
    }

    onUpdateServerName(event:Event) {
      this.loggingService.name= (<HTMLInputElement> event.target).value;
       console.log(this.loggingService)
      }
  ngOnInit(): void {
    

  }
}