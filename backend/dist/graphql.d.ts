export interface Cat {
    name: string;
    age: number;
    breed: string;
}
export interface IQuery {
    hello(): string | Promise<string>;
    cats(): Cat[] | Promise<Cat[]>;
}
