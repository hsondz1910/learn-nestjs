export class ResponseData<D> {
    data: D | D[];
    statusCode: number;
    message: string;

    constructor(data: D | D[], status: number, message: string) {
        this.data = data;
        this.statusCode = status;
        this.message = message;

        return this;
    }
}