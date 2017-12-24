import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @ViewChild('header') header: ElementRef;
  @ContentChild('paragraphFromOutside') paragraphFromOutside: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('Header: ' + this.header.nativeElement.textContent);
    console.log('Paragraph from outside: ' + this.paragraphFromOutside.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngDoCheck() {
    console.log("ngDoCheck called!");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called!");
    console.log('Header: ' + this.header.nativeElement.textContent);
    console.log('Paragraph from outside: ' + this.paragraphFromOutside.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called!");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called!");
    console.log('Header: ' + this.header.nativeElement.textContent);
    console.log('Paragraph from outside: ' + this.paragraphFromOutside.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called!");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called!");
  }

}
