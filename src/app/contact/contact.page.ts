import { Component, OnInit } from '@angular/core';
import { EmailComposer}  from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  subject = "";
  body = '';
  to = 'info@journalfilter.com';
  from = '';
  constructor(public emailcomposer:EmailComposer) { }

  ngOnInit() {
  }

  send(){
    let email = {
      to :this.to,
      cc :this.from,
      bcc:[],
      attachment:[],
      subject:this.subject,
      body:this.body,
      isHtml:true,
      

    }
    //console.log(this.body);
    this.emailcomposer.open(email);
  }
}
