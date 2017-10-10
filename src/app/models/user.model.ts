export class User {
  id: string;
  username: string;
  email: string;
  message: string;
  role: string;
  fileName: any;

  constructor(obj: Object = {}) {
    Object.assign(this, obj);
  }
}
