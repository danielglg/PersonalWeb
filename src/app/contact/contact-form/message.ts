export class Message {

    constructor(
      public name: string,
      public mailAddress: string,
      public message: string,
      public subject?: string
    ) {  }
}
