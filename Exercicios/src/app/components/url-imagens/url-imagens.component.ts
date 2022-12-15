import { Component } from '@angular/core';

@Component({
  selector: 'app-url-imagens',
  templateUrl: './url-imagens.component.html',
  styleUrls: ['./url-imagens.component.scss']
})
export class UrlImagensComponent {
  arrayFotos: any = [
    {
      url: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8a627ec10b57f4f2/5eb7cdc16509f3370a5a93b7/V_AGENTS_587x900_sage.png",
      description:"Sage"
    },
    {
      url: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt53405c26141beff8/5f21fda671ec397ef9bf0894/V_AGENTS_587x900_KillJoy_.png",
      description:"KillJoy"
    },
    {
      url: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt516d37c6c84fcda0/625db737c9aa404b76ddd594/Fade_Key_Art_587x900_for_Website.png",
      description:"Fade"
    },
    {
      url: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte5aefeb26bee12c8/60ca5aa30ece0255888d7faa/KAYO_KeyArt_587x900.png",
      description:"Kayo"
    },
    {
      url: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4e5af408cc7a87b5/5eb7cdc17bedc8627eff8deb/V_AGENTS_587x900_Omen.png",
      description:"Omen"
    }
  ]
}
