import { GetFligsService } from './../../services/get-fligs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fligs',
  templateUrl: './fligs.component.html',
  styleUrls: ['./fligs.component.css'],
})
export class FligsComponent implements OnInit {
  countries: any[] = [];
  region: any[] = [];
  filteredCountries: any[] = [];
  selectedRegion: string = '0';
  searchText: string = '';
  countryDitals: string = '';

  constructor(private getFligs: GetFligsService) {}
  ngOnInit(): void {
    this.allCounty();
    this.onRegionChange();
  }

  allCounty() {
    this.getFligs.getFlig().subscribe((data: any[]) => {
      this.countries = data;
      // console.log(this.countries);
    });
  }

  onRegionChange() {
    this.getFligs.getRegion().subscribe((data: any[]) => {
      const allRegiona = data.map((item) => item.region);
      this.region = Array.from(new Set(allRegiona));
      // console.log(this.region);
    });
  }

  selectRegion(event: any) {
    let value = event.target.value;
    if (value == 0) {
      this.allCounty();
    } else {
      // console.log(value);
      this.getRegionAllCuntrys(value);
    }
  }

  getRegionAllCuntrys(region: any) {
    this.getFligs.getRegionCuntry(region).subscribe((data: any[]) => {
      // console.log(data);
      this.countries = data;
    });
  }
  getCuntrySearched(event: any) {
    let value = event.target.value;
    if (value == '') {
      this.allCounty();
    } else {
      // console.log(value);
      this.getCuntry(value);
    }
  }
  getCuntry(cuntry: any) {
    this.getFligs.getCuntry(cuntry).subscribe((data: any[]) => {
      // console.log(data);
      this.countries = data;
    });
  }

  getCuntryDetail(event: any) {
    // let value = event.target.value;
    this.countryDitals = event;
    // console.log(this.countryDitals);
    // this.getCuntry(value);
  }
}
