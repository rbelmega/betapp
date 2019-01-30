import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.scss"]
})
export class TeamComponent implements OnInit {
  score = "?";
  @Input() teamName;
  @Input() teamLogo;
  @Input() viewMode;
  displaySelections = false;
  constructor() {}

  ngOnInit() {}

  setScore() {
    this.displaySelections = !this.displaySelections;
  }

  onResultSelected(score) {
    this.score = score;
  }
}