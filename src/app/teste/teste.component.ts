import { Component, OnInit } from '@angular/core';
import { StreamingService } from '../services/streaming.service';
import { Streaming } from '../classes/streaming';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {
streaming:Streaming;
  constructor(private api:StreamingService) { }


  ngOnInit(): void {
  }

}
