import { Component, OnInit } from "@angular/core";
import { Qoute } from 'qoutes';

@Component({
  selector: "app-qoutes",
  templateUrl: "./qoutes.component.html",
  styleUrls: ["./qoutes.component.css"]
})
export class QouteComponent implements OnInit {
  qoutes: Qoute[] = [
    new Qoute(
      1,
      "variety is the spice of lfe",
      "James Odera",
      "Vybes Kartel",
      new Date(2020, 0, 23)
    ),


    new Qoute(
      2,
      "some people are too poor that all the have is money ",
      "Elizabeth Otieno",
      "Bob Marley",
      new Date(2012, 1, 13)
    ),


    
    new Qoute(
      3,
      "follow your heart but take your brain with you",
      "Nesta",
      "Bob Marley",
      new Date(2010, 1, 23)
    )
  ];

  addNewQoute(qoutes: Qoute) {
    let qouteLength = this.qoutes,
      length: any;
    this.qoutes= qouteLength;
    qoutes.completeDate=new Date (qoutes.completeDate)
    this.qoutes.push(qoutes)
  }

  toggleDetails(index: string | number) {
    this.qoutes[index].showAuthor = !this.qoutes[index].showAuthor;
  }

  deleteQoute(isComplete: any, index: number) {
    if (isComplete) {
      let toDelete = confirm(
        "Sure you want to delete ${this.quotes[index].name}?"
      );

      if (toDelete) {
        this.qoutes.splice(index, 1);
      }
    }
  }
  completeQoute(isComplete: any, index: number) {
    if (isComplete) {
      this.qoutes.splice(index, 1);
    }
  }
  constructor() {}

  ngOnInit() {}
}