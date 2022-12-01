import { Injectable } from "@angular/core"


@Injectable({
    providedIn: 'root'
})
export class LoggingService {
    public getForm(): Array<any> {
      return [
        {firstName: '', lastName: '', email: '', phone: 0}
      ]
    }

   name = ''
}



   