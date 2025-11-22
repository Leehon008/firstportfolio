import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  
  
  constructor(private sanitizer: DomSanitizer) {}

  title: string = "About"
  subTitle: string = "Abou Me"
  description: string = "As a developer with hands-on experience in full-stack development,\
        I combine front-end and back-end expertise with skills in database management, reporting systems,\
        and business applications (Laravel, .NET, Angular, SQL Server, SSRS, Power BI, SAP ABAP, SAP Adobe Forms)."
  profileImageUrl: string = "assets/img/profile/profile.jpg";
  profileImgAltText: string = "Profile Image";
  jobTitle: string = "Former Full Stack Software Developer";
  subTitleDescription: string = " While advancing my skills in offensive security, I am also preparing for leadership roles in governance, risk,\
              and cyber defence, merging development expertise with a strategic, security-conscious approach.";
  skills: any =` <code>💻 Programming & Development:<br> Python, C#, PHP, Java, Flutter, SQL, SAP ABAP, website \
    development (HTML, CSS, WordPress or Angular ) <br> 📊 Data Analytics & Visualization: Power BI, SSRS, Excel<br>\
                🤖 Cybersecurity & Learning: Wireshark, Splunk <br> ☁️ Cloud & DevOps: Azure Fundamentals, GitHub, Azure DevOps <br>\
                📋 Project Management: <br>Agile Methodologies, Software Delivery, Cross-functional Team Leadership</code>`;


  personalDetails: any[] = [
    {
      label: 'Name',
      value: 'Lewis Honye'
    },

    {
      label: 'Age',
      value: '29 Years'
    },

    {
      label: 'Email',
      value: 'honye.lewism@gmail.com'
    },

    {
      label: 'Mentor',
      value: '<a href="https://www.linkedin.com/in/milton-gore-145789132/">Milton Gore</a>'
    },

    {
      label: 'Nationality',
      value: 'Zimbabwe'
    },

    {
      label: ' Collaboration:',
      value: '<a href="https://github.com/Leehon008">Github</a>'
    },
  ]


  getSanitizedValue(value: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

}
