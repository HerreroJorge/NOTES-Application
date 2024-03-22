import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NoteCardComponent } from '../../note-card/note-card.component';
import { Note } from '../../shared/note.model';
import { NotesService } from '../../shared/notes.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NoteCardComponent, CommonModule, HttpClientModule],
  providers: [NotesService],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.scss',
  host: {ngSkipHydration: 'true'}
})
export class NotesListComponent implements OnInit{

  notes: Note[] = new Array<Note>();
  url = 'http://localhost:9000/api/notes';
  error: any;

  constructor(private notesService: NotesService,
    private router: Router,
    private http: HttpClient) {}

  ngOnInit(): void {

    this.notesService.getAllNotes().subscribe(result =>{
      console.log(result);
      this.notes = result;
    })

    console.log(this.notes);
  }

  updateNote(i: number){
    this.router.navigateByUrl('/'+i);
  }

  createNote(){
    this.router.navigateByUrl('/new');
  }

  deleteNote(id:string){
    this.notesService.deleteNote(id, () => {
      this.router.navigateByUrl('/');
    })
  }
}
