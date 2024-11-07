export class Student{
    constructor(
    public id :number,
    public firsrName : string,
    public age:number,
    public adress :string,
    public isActive :boolean=true,
    public dateEnd:string ,
    public flagEdit : boolean = false
    ){ }
}