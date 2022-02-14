export class Badrequest extends Error {
    status: number;

    constructor(message: string = 'BAD REQUEST') {
        super(message);
        this.status = 400;
    }
}
