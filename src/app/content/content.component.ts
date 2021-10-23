import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  profileData: any;
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getprofileData().subscribe((json: any) => {
      this.profileData = json.data;
      console.log(this.profileData);
    });
  }
}
