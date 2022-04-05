import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
        
          { title: 'Palette', cols: 1, rows: 1 },

          
        ];
      }

      return [
        { title: 'Palette', cols: 1, rows: 1 },

      ];
    })
  );

  urllink:string=""
  selectFile(event:any){
    if(event.target.files)
    {
      var reader= new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload=(event : any)=>{
        this.urllink=event.target.result
      }

    }
  }
  

  constructor(private breakpointObserver: BreakpointObserver) {}
}
