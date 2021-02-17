export class User {
  constructor(
      public name: string,
      public email: string,
      public phone: number,
      public topic: string,
      public timePreference: string,
      public subscribe: boolean
  ) {}
}

export interface User {
  id: number;
  name: string;
}