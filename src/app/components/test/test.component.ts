import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  onDragEnded(event:any) {
    let element = event.source.getRootElement();
    let boundingClientRect = element.getBoundingClientRect();
    let parentPosition = this.getPosition(element);
    /* let abs=boundingClientRect.x - parentPosition.left;
    let name=element.tagName;
    console.log(name)
    console.log('x: ' + (boundingClientRect.x - parentPosition.left), 'y: ' + (boundingClientRect.y - parentPosition.top));     
    localStorage.setItem("x",JSON.stringify(abs))  ;  */
    
    const Myobject={
      
      name:element.tagName,
      x:boundingClientRect.x - parentPosition.left,
      y:boundingClientRect.y - parentPosition.top,
    }
    
    console.log(Myobject);
    let json =JSON.stringify(Myobject);
    localStorage.setItem(Myobject.name,json);
    let obj=localStorage.getItem(Myobject.name);
    console.log(obj);
    this.http.post("http://localhost:8080/capsuleapime",json,{'headers':{'content-type':'application/json'}});

  }
  
  getPosition(el:any) {
    let x = 0;
    let y = 0;
    while(el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      x += el.offsetLeft - el.scrollLeft;
      y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
    }
    return { top: y, left: x };
  }

}


