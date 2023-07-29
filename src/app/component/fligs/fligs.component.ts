import { GetFligsService } from './../../services/get-fligs.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fligs',
  templateUrl: './fligs.component.html',
  styleUrls: ['./fligs.component.css'],
})
export class FligsComponent {
  darkMode: boolean = false;
  countries: any[] = [];
  region: any[] = [];
  filteredCountries: any[] = [];
  selectedRegion: string = '0';
  searchText: string = '';

  constructor(private getFligs: GetFligsService) {}
  ngOnInit(): void {
    this.allCounty();
    this.onRegionChange();
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    const body = document.querySelector('body');

    if (this.darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

  allCounty() {
    this.getFligs.getFlig().subscribe((data: any[]) => {
      this.countries = data;
      console.log(this.countries);
    });
  }

  onRegionChange() {
    this.getFligs.getRegion().subscribe((data: any[]) => {
      const allRegiona = data.map((item) => item.region);
      this.region = Array.from(new Set(allRegiona));
      console.log(this.region);
    });
  }

  selectRegion(event: any) {
    let value = event.target.value;
    if (value == 0) {
      this.allCounty();
    } else {
      console.log(value);
      this.getRegionAllCuntrys(value);
    }
  }

  getRegionAllCuntrys(region: any) {
    this.getFligs.getRegionCuntry(region).subscribe((data: any[]) => {
      console.log(data);
      this.countries = data;
    });
  }
  getCuntrySearched(event: any) {
    let value = event.target.value;
    if (value == '') {
      this.allCounty();
    } else {
      console.log(value);
      this.getCuntry(value);
    }
  }
  getCuntry(cuntry: any) {
    this.getFligs.getCuntry(cuntry).subscribe((data: any[]) => {
      console.log(data);
      this.countries = data;
    });
  }

  //   onRegionChange(region: string) {
  //     this.selectedRegion = region;
  //     this.filterCountries();
  //   }

  //   onSearch(searchText: string) {
  //     this.searchText = searchText;
  //     this.filterCountries();
  //   }

  //   filterCountries() {
  //     // Perform filtering based on 'selectedRegion' and 'searchText'.
  //     this.filteredCountries = this.countries.filter((country) => {
  //       const regionMatch =
  //         this.selectedRegion === '0' || country.region === this.selectedRegion;
  //       const nameMatch = country.name.common
  //         .toLowerCase()
  //         .includes(this.searchText.toLowerCase());
  //       return regionMatch && nameMatch;
  //     });
  //   }
}
