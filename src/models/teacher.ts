export class Teacher {
    static next: number = 0;
    public id: number
    constructor(

        public name: string,
        public classes: Array<number>,
    ) {
        Teacher.next++;
        this.id = Teacher.next;
    }
}