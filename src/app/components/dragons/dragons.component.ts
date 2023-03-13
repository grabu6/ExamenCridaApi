import { Component, OnInit } from '@angular/core';
import { dragonsApi } from 'src/app/serveis/crides';

@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.component.html',
  styleUrls: ['./dragons.component.css']
})
export class DragonsComponent implements OnInit {

  dragons!: Array<any>;

  constructor(private dragonApi:dragonsApi ) { }

  ngOnInit(): void {
    this.getDragons();
  }

  getDragons() {
    this.dragonApi.getDragons().subscribe((data: any) => {
      this.dragons = data.name;
      console.log(this.dragons)
      
    })
  }

}
