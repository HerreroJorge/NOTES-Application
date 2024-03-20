import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoteCardComponent } from '../../note-card/note-card.component';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [RouterOutlet, NoteCardComponent],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.scss'
})
export class NotesListComponent {

}
