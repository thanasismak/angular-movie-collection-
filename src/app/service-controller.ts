import { NumberLiteralType } from "typescript";

export class ServiceController {
    Page: number;
    Results: object[];

    constructor() {
        this.Page = 0;
        this.Results = [{}];
    }
}
