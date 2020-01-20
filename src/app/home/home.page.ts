import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController} from '@ionic/angular';
import {Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  information:any[];
  automaticClose = false;
  dgswitch:any;
  url:any;
  spinner = true;
  constructor(private http:HttpClient , private navCtrl:NavController,private router:Router) {
   
      this.http.get('https://www.journalfilter.com/Api.php?discipline=cardiology&getmenu=topics').subscribe(res=>{
          this.information = res['item'];
          this.spinner = false;
        });
    
  }
  ngOnInit() {
  }

  pushpage(i,j){
    this.url = this.information[i].children[j].url;
    let title = this.information[i].children[j].name;
    this.navCtrl.navigateForward(['/second/', this.url,title]);
  }

  toggleSection(index){
    this.information[index].open = !this.information[index].open;
    if(this.automaticClose && this.information[index].open){
      this.information
      .filter((item,itemIndex)=>itemIndex != index )
      .map(item=>item.open = false);
    }
  }
  toggleItem(index,childIndex){
    this.information[index].children[childIndex].open
  }

}
//