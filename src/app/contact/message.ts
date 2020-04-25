export class Message {

    constructor(
      public name: string,
      public emailAddress: string,
      public message: string,
      public subject?: string
    ) {  }
}
