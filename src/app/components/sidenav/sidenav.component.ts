import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @ViewChild(MatSidenav) 
  sidenav !:MatSidenav;


  constructor(private observer:BreakpointObserver,private http:HttpClient ) { }
  ngAfterViewInit(){
    this.observer.observe(['max-width:800px']).subscribe((res)=>{
      if(res.matches){
        this.sidenav.mode='over';
        this.sidenav.close();


      }else{
        this.sidenav.mode='side';
        this.sidenav.open();

      }
    })

  }

  ngOnInit(): void {
  }

}


