import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Note } from '../../shared/note.model';
import { NotesService } from '../../shared/notes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-note-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './note-details.component.html',
  styleUrl: './note-details.component.scss'
})
export class NoteDetailsComponent implements OnInit{

  note!: Note;
  noteId!: number;
  new!: boolean;

  constructor(private notesService: NotesService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(){

    this.route.params.subscribe((params: Params) => {
      this.note = new Note();
      if(params['id']){
        this.note = this.notesService.getNote(params['id']);
        this.noteId = params['id'];
        this.new = false;
      }
      else{
        this.new = true;
      }
    })
  }

  onSubmit(form: NgForm){
    if (this.new){
      this.notesService.addNote(form.value);
    }else{
      this.notesService.updateNote(this.noteId, form.value.title, form.value.body);
    }
    this.router.navigateByUrl('/');
  }

  cancel(){
    this.router.navigateByUrl('/');
  }

}
