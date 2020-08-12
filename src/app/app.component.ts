import { Component } from '@angular/core';

@Component({
  selector: 'mt-root',
  template: `
    <mt-menubar></mt-menubar>
    <router-outlet></router-outlet>
  `

})
export class AppComponent {
  title = 'musictrainer';

  test(event: MouseEvent)
  {
    console.log("ecchilo: ",event);
  }
}
