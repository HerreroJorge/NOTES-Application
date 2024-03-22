import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Note } from '../../shared/note.model';
import { NotesService } from '../../shared/notes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-note-details',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  providers: [NotesService],
  templateUrl: './note-details.component.html',
  styleUrl: './note-details.component.scss'
})
export class NoteDetailsComponent implements OnInit{

  note!: Note;
  noteId!: string;
  new!: boolean;

  constructor(private notesService: NotesService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(){

    this.route.params.subscribe((params: Params) => {
      this.note = new Note();
      if(params['id']){
        this.notesService.getNote(params['id']).subscribe(result =>{
          console.log(result);
          this.note = result;
          this.noteId = params['id'];
          this.new = false;
        })
      }
      else{
        this.new = true;
      }
    })
  }

  //   this.route.params.subscribe((params: Params) => {
  //     this.note = new Note();
  //     if(params['id']){
  //       this.note = this.notesService.getNote(params['id']);
  //       this.noteId = params['id'];
  //       this.new = false;
  //     }
  //     else{
  //       this.new = true;
  //     }
  //   })
  // }

  onSubmit(form: NgForm){
    if (this.new){
      //this.notesService.addNote(form.value);
      const note = new Note();
      note.title = form.value.title;
      note.body = form.value.body;
      this.notesService.addNote(note, () => {
        this.router.navigateByUrl('/');
      })
    }else{
      const note = new Note();
      note._id = this.noteId;
      note.title = form.value.title;
      note.body = form.value.body;
      this.notesService.updateNote(note, () => {
        this.router.navigateByUrl('/');
      })
    }
    this.router.navigateByUrl('/');
  }

  cancel(){
    this.router.navigateByUrl('/');
  }

}
