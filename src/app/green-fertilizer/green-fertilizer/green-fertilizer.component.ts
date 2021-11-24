import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-green-fertilizer',
  templateUrl: './green-fertilizer.component.html',
  styleUrls: ['./green-fertilizer.component.css']
})
export class GreenFertilizerComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onNext(){
    this.route.navigate(['/']);
  }

}
