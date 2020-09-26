export class Contact {
  constructor(
    private _id: number,
    private _firstName: string,
    public lastName?: string,
    public phoneNumber?: string,
    public cellPhoneNumber?: string,
    public alternativePhoneNumber?: string,
    public primaryEmailAddress?: string,
    public secondaryEmailAddress?: string,
    public primaryAddress?: string,
    public secondaryAddress?: string,
    public website?: string,
    public notes?: string,
    ) { }

    get id(): number {
      return this._id;
    }

    get firstName(): string {
      return this._firstName;
    }
}
