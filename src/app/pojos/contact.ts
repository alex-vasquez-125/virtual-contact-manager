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

/* todo
  should i make some of these arrays?
  phoneNumbers: PhoneNumber[]

  class PhoneNumber
  phoneNumber: string,
  description: string

  how would i design the intake form?
  how would i design the view for this phone number array?

  * I don't love the way I have to create these objects..
  but maybe that is me wanting to have javascript's wild west
  duck typing where the object looks like a duck it is a duck
  which can't live together with using more type/code safe things
  like class and getter/setters. can't just make an object with this
  class structure.. no duck typing..

  * I don't love that this is what creating an object looks like using the constructor
  the way the code is currently written..
      const four = new Contact(
      'Peter',
      'Vasquez',
      undefined,
      'xxx-xxx-xxxx'
    );
  I could just give the required field and then use setters from then on..
 */
