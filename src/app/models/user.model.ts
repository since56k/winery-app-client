export class User {
  id: string;
  username: string;
  email: string;
  message: string;

  constructor(obj: Object = {}) {
    Object.assign(this, obj);
  }
}
