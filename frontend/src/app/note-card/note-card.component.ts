import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotesService } from '../shared/notes.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-note-card',
  standalone: true,
  imports: [RouterModule, HttpClientModule],
  providers: [NotesService],
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.scss'
})
export class NoteCardComponent implements OnInit{

  @Input('title') title!: string;
  @Input('body') body!: string;
  @Input() link!: string;

  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('truncator') truncator!: ElementRef<HTMLElement>;
  @ViewChild('bodyText') bodyText!: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2,
    private notesService: NotesService){}

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

  deleteButton(){
    this.deleteEvent.emit()
  }
}
