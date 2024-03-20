import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-note-card',
  standalone: true,
  imports: [],
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.scss'
})
export class NoteCardComponent implements OnInit{

  @Input('title') title!: string;
  @Input('body') body!: string;

  @ViewChild('truncator') truncator!: ElementRef<HTMLElement>;
  @ViewChild('bodyText') bodyText!: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2){}

  ngOnInit(){
    // setTimeout(() => {
    //   if(typeof window !== 'undefined'){
    //     let style = window.getComputedStyle(this.bodyText.nativeElement, null);
    //     let viewableHeight = parseInt(style.getPropertyValue("height"), 10);

    //     if (this.bodyText.nativeElement.scrollHeight > viewableHeight){
    //       this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
    //       console.log('none')
    //     } else {
    //       this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block');
    //       console.log('block')
    //     }
    //     console.log('mkfnjefnwuqnn')
    //   }
    // }, 0);
  }
}
