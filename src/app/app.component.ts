import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databinding';
  name='Karthika';
  address={
    street:'Yogeeshwaran Street',
    City: 'Chennai',
    Pincode: 600091.
};
colorval="green";
placeval="Enter val";
        
}
