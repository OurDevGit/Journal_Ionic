import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {

  private slug : string;
  private title :string;
  public information : any;
  private spinner = true;
  private contents = false;
  private search : string;
  constructor( private route:ActivatedRoute,private http:HttpClient ,private modalCtrl:ModalController) { 
  }

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('title');
    this.title = this.route.snapshot.paramMap.get('name');
    this.http.get('https://www.journalfilter.com/Api.php?q=3months&discipline=cardiology'+this.slug).subscribe(res=>{
      this.information = res;
      this.spinner = false;
      this.contents = true;
    });
    
  }

  filterFunction(event){
    this.spinner = true;
    this.contents = false;
    if(event.detail.value == 'recent'){
      this.slug = this.route.snapshot.paramMap.get('title');
      this.title = this.route.snapshot.paramMap.get('name');
      this.http.get('https://www.journalfilter.com/Api.php?q=week&discipline=cardiology'+this.slug+'&search='+this.search).subscribe(res=>{
        this.information = res;
        this.spinner = false;
        this.contents = true;
      });
    }
    if(event.detail.value == 'lastone'){
      this.slug = this.route.snapshot.paramMap.get('title');
      this.title = this.route.snapshot.paramMap.get('name');
      this.http.get('https://www.journalfilter.com/Api.php?q=month&discipline=cardiology'+this.slug+'&search='+this.search).subscribe(res=>{
        this.information = res;
        this.spinner = false;
        this.contents = true;
      });
    }
    if(event.detail.value == 'lastthree'){
      this.slug = this.route.snapshot.paramMap.get('title');
      this.title = this.route.snapshot.paramMap.get('name');
      this.http.get('https://www.journalfilter.com/Api.php?q=3months&discipline=cardiology'+this.slug+'&search='+this.search).subscribe(res=>{
        this.information = res;
        this.spinner = false;
        this.contents = true;
      });
    }
    if(event.detail.value == 'lastyear'){
      this.slug = this.route.snapshot.paramMap.get('title');
      this.title = this.route.snapshot.paramMap.get('name');
      this.http.get('https://www.journalfilter.com/Api.php?q=year&discipline=cardiology'+this.slug+'&search='+this.search).subscribe(res=>{
        this.information = res;
        this.spinner = false;
        this.contents = true;
      });
    }

  }
  async openModal(index){
    let tmp = this.information[index].link.doi;
    let tmp1 = tmp.replace("target=http://","target=");
    let tmp2 = tmp1.replace("target=http%3A%2F%2F","target=");
    this.information[index].link.doi = tmp2.replace("fw.php","fwApi.php");

    tmp = this.information[index].link.google;
    tmp1 = tmp.replace("target=http://","target=");
    tmp2 = tmp1.replace("target=http%3A%2F%2F","target=");
    this.information[index].link.google = tmp2.replace("fw.php","fwApi.php");

    tmp = this.information[index].link.pdf;
    tmp1 = tmp.replace("target=http://","target=");
    tmp2 = tmp1.replace("target=http%3A%2F%2F","target=");
    this.information[index].link.pdf = tmp2.replace("fw.php","fwApi.php");

    tmp = this.information[index].link.pub;
    tmp1 = tmp.replace("target=http://","target=");
    tmp2 = tmp1.replace("target=http%3A%2F%2F","target=");
    this.information[index].link.pub = tmp2.replace("fw.php","fwApi.php");

    const modal = await this.modalCtrl.create({
      component:ModalPage,
      componentProps:{
        contents: this.information[index]
      }
    });
    
    this.http.get('https://www.journalfilter.com/Api.php?hitrate=1&pmid='+this.information[index].article_id).subscribe(res=>{
      console.log(res);
      });
    modal.present();
  }

}
