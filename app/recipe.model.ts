export class Recipe {
  // public is a modifier/access-level modifier that indicates that any part of the app has permission to access this property
  public cooked: boolean = false;
  constructor(public title: string, public rating: integer) { }
}
