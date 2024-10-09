import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient ,HttpHandler} from '@angular/common/http';
import { AppServiceService } from './app-service.service';
import { AppModel } from './app.model';
import {take } from 'rxjs/operators'
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,CommonModule],
  providers:[AppServiceService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ai-dustbin';

  public dataa = 'assets/dustbinData.json';
  public appModel: AppModel[];
  public singleDustbin: AppModel | undefined;
  public fillStatus = 'Empty';
  public isLoading = false
  public isDataScreen =false
  
  constructor( private readonly appService: AppServiceService){
    this.appModel = appService.getDustbinData();
    // this.sendEmail()
  }

  public fillDustbin(data: string): void {
    this.fillStatus = data
  }
  enterMainScreen(): void {
    this.isDataScreen = true
  }

  public onMoreInfoClick(index: number): void {
    this.singleDustbin = this.appModel[index]
    this.fillDustbin(this.singleDustbin.dustbinStatus)
  }

  public sendEmail(): void {
    this.isLoading = true
    emailjs.init('g7dIYxGvjGBuD82Yj')
    emailjs.send("service_59zn14b","template_bdvpghj",{
      to_name: "Admin",
      from_name: "Ai-dustbin",
      message: `This is to inform the the below Dustbin with dustbin id ${this.singleDustbin?.uId} in location ${this.singleDustbin?.location} is Full. <br>.Request you to please empty the bin`,
      }).then(
        (response) => {
          alert(`Mail Sent successfully, please check your Gmail`);
          this.isLoading = false
        },
        (err) => {
          this.isLoading = false
          alert(`${err}`);
        },
      );
    }
  
}
