import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  isActive(route: string){
    var url = window.location.href;
    return url.indexOf(route) > -1;
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/auth');
  }

}
