import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {
  experiences: any[] = [
    {
      company: "Etiam Industries",
      period: "Jun, 2023 - Current",
      role: "Project Lead",
      description: ` <ul class="description">
                        <li> Planning and Execution: Defining project scope, objectives, and
                            deliverables; creating detailed project plans, schedules, and budgets; and
                            ensuring the project is executed according to plan.</li>
                        <li>Team Leadership: Motivating, guiding, and managing the project team members,
                            assigning tasks, providing direction, and facilitating communication to
                            achieve project goals.</li>
                        <li> Stakeholder Communication: Serving as the main liaison between the project
                            team and stakeholders (such as clients, senior management, and vendors);
                            providing regular updates on project status, progress, and issues.</li>
                        <li> Risk Management: Identifying potential risks and issues, developing
                            mitigation strategies, and resolving problems as they arise to prevent
                            delays or budget overruns.</li>
                        <li> Resource Management: Allocating and managing resources, including
                            personnel, budget, and equipment, efficiently.</li>
                        <li> Quality Control: Ensuring that the project deliverables meet established
                            quality standards and stakeholder expectations. </li>
                    </ul>`
    },
    {
      company: "Nullam Corp",
      period: "2019 - 2023",
      role: "Senior graphic design specialist",
      description: `<ul>
                      <li>Lead in the design, development, and implementation of the graphic, layout,
                          and production
                          communication materials</li>
                      <li>Delegate tasks to the 7 members of the design team and provide counsel on
                          all aspects of the
                          project. </li>
                      <li>Supervise the assessment of all graphic materials in order to ensure quality
                          and accuracy of
                          the design</li>
                      <li>Oversee the efficient use of production project budgets ranging from $2,000
                          - $25,000</li>
                  </ul>`
    },
  ];

  education: any[] = [ // Education Group (new additions)
      {
        institution: "Vestibulum University",
        period: "2017-2019",
        degree: "Diploma in Consequat",
        description: `
        <ul class="description">
          <li>Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus.</li>
        </ul>`
      },
      {
        institution: "Nullam Corp",
        period: "2019 - 2023",
        degree: "Master of Fine Arts & Graphic Design",
        description: `
        <ul class="description">
          <li>Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus.</li>
        </ul>`
      },
      {
        institution: "Vestibulum University",
        period: "2015-2019",
        degree: "Bachelor of Fine Arts & Graphic Design",
        description: `
        <ul class="description">
          <li>Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus maecenas tempus.</li>
        </ul>`
      } 
  ]

  constructor(private sanitizer: DomSanitizer) { }

  getSanitizedValue(value: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
