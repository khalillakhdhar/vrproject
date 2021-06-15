import { Component, OnInit } from '@angular/core';
import { Streaming } from '../classes/streaming';
import { CoursService } from '../services/cours.service';
import { Cours } from '../classes/cours';
import { UserService } from '../services/user.service';
import { User } from '../classes/user';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {
streaming:Streaming;
courses:Cours[];
users:User[];
  constructor(private api:CoursService,private uss:UserService) { }


  ngOnInit(): void {
    this.streaming=new Streaming();
    this.read();
    this.readuser();

  }

read()
{
  this.api.read_Cours().subscribe(data => {

    this.courses = data.map(e => {
      return {
        id: e.payload.doc.id,

          date_heure: e.payload.doc.data()["date_heure"],
          url: e.payload.doc.data()["url"],
          matiere: e.payload.doc.data()["matiere"],
          description: e.payload.doc.data()["description"],
          classe: e.payload.doc.data()["classe"],
          
  
   
 
 


      };
    });
    console.log(this.courses);
  });


}
readuser()
{
  this.uss.read_Users().subscribe(data => {

    this.users = data.map(e => {
      return {
        id: e.payload.doc.id,

        nom: e.payload.doc.data()["nom"],
        prenom: e.payload.doc.data()["prenom"],
        age: e.payload.doc.data()["age"],
        email: e.payload.doc.data()["email"],
        mdp: e.payload.doc.data()["mdp"],
        adresse: e.payload.doc.data()["adresse"],
        classe: e.payload.doc.data()["classe"],
        specialite: e.payload.doc.data()["specialite"],
        grade: e.payload.doc.data()["grade"],
 
 


      };
    });
    console.log(this.users);
  });


}
}
