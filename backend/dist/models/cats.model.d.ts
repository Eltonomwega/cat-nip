import { Document } from 'mongoose';
export declare class Cat extends Document {
    id: string;
    name: string;
    age: number;
    breed: string;
}
export declare const catSchema: import("mongoose").Schema<Cat, import("mongoose").Model<any, any, any>, undefined>;
