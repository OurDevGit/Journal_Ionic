import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, PopoverController } from '@ionic/angular';
import { MpopoverComponent } from '../components/mpopover/mpopover.component';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private navParams:NavParams, private modlaCtrl :ModalController,public popoverctrl :PopoverController,private socialSharing:SocialSharing) { }
  content = null;
  ngOnInit() {
    this.content = this.navParams.get('contents');
  }
  
  async presspopover(){
    const popver = await this.popoverctrl.create({
      component:MpopoverComponent,
      componentProps:{
        link :this.content
      },
      event,
      cssClass:'pop-over-style'
    });
    return await popver.present();
  }
  sendShare(sub,content,post,info,doi,pub,pdf,google){
    console.log("a~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",sub);
    let dgspace = '\n\n';
    let dgenter = '<br>';
    let subject  = sub + dgspace + dgenter;
    let maincontent = content + dgspace + dgenter ;
    let mpost = post + dgspace + dgenter;
    
    let minfo = info +dgspace + dgenter;
    let mdoi ='DOI :'+ doi +dgspace + dgenter;
    let mpub ='PUB :'+pub + dgspace + dgenter;
    let mpdf = 'PDF :'+pdf+dgspace + dgenter;
    let mgoogle = 'Google :'+google +dgspace + dgenter;
    let sendcontent ="<html><body>" + subject + mpost + maincontent + minfo+ mdoi + mpub + mpdf+mgoogle + "</body></html>";
    console.log("share",sendcontent);

    this.socialSharing.share( sendcontent,sub,null,null);
  }
  closeModal(){
    this.modlaCtrl.dismiss();
  }
}
