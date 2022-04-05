import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';






@Component({
  selector: 'app-here',
  templateUrl: './here.component.html',
  styleUrls: ['./here.component.scss']
})
export class HereComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

    files: File[] = [];

    onSelect(event:any) {
      console.log(event);
      this.files.push(...event.addedFiles);
    }
  
    onRemove(event:any) {
      console.log(event);
      this.files.splice(this.files.indexOf(event), 1);
    }
    
  
  
  
  
  }

