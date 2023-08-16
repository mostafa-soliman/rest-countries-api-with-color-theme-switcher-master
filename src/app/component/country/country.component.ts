import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetFligsService } from 'src/app/services/get-fligs.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
  CountryDetilse: any[] = [];
  currntCountry: string = '';

  constructor(
    private getFligs: GetFligsService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.currentPage();
  }

  currentPage() {
    this.currntCountry = this.activatedRoute.snapshot.paramMap.get('data')!;

    this.getFligs.getCuntry(this.currntCountry).subscribe((data: any[]) => {
      this.CountryDetilse = data;
    });
  }
}
