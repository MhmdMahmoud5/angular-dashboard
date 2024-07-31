import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  logo: string =
    'https://www.maids.cc/assets/images/logos/blue/Get-a-full-time-maid-or-a-maid-visa.svg?_v=18';

    onSearch(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value;
    // Implement search functionality here
    console.log(`Searching for user ID: ${searchTerm}`);
  }

  }
