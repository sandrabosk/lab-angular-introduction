import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Array<Object>;
  title = 'Blog & Comments';
  article:{title: string, url: string, desc: string};
  constructor() {
    this.comments = [
      {
        madeBy: 'Bobby Tables',
        comment:'It seems quite complicated, how much previous experience is required?',
        publishedAt: Date()
      },
      {
        madeBy:'Ironhack School',
        comment:'We give you a pre-work, that you have to do at home and that will help you to face course without any problem.',
        publishedAt: Date()
      }
    ]
    this.article = {
      title: 'Learn how to code with Ironhack',
      url: 'https://i2.wp.com/naplesherald.com/wp-content/uploads/2015/08/Christina-Laptop.jpg?fit=1100%2C825',
      desc: 'Lorem ipsum dolor sit amet, aeterno dignissim mei in, cu has cetero feugait minimum, ea vim dico iriure. At eam mollis veritus. Cu molestie contentiones vix. Amet duis veniam ius ne. Et sed tamquam deserunt pericula, eos quod aperiam te. Scripta debitis mediocritatem sit et. Id diceret efficiendi eum, quo cu dicat aperiri appareat, at mutat nostrum vix. Te vix quod discere ceteros, no graeci consulatu est, volumus sententiae an usu. Animal atomorum maiestatis ne sit. Vix aeque blandit pericula id. Ea nisl porro his, putent dissentiunt id nec.'
    }
  }

  ngOnInit() {
  }

}
