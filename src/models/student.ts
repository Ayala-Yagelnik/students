export class Student{
    constructor(
    public id :number,
    public firsrName : string,
    public age:number,
    public adress :string,
    public isActive :boolean=true,
    public dateEnd:Date ,
    public flagEdit : boolean = false,
    public isPay:boolean=false,
    ){ }
}