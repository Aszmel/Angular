import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  // OR: template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = "Test server";
  username = "";
  serverCreated = false;
  servers = ["TestServer", "TestServer 2"];
  hiddenText = "";
  arrayText = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      `Server was created! Name is ` + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
  //------test section------
  ResetUser() {
    this.username = "";
  }
  displayHiddenParagraph() {
    this.hiddenText = "Hidden text";
    this.arrayText.push(this.hiddenText);
  }
  counter() {
    return this.arrayText.length;
  }
  getColor() {
    return this.arrayText.length >= 5 ? "blue" : "";
  }
}
