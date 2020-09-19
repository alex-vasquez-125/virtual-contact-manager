export class NewContact {
  constructor(
    public firstName: string,
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
}
