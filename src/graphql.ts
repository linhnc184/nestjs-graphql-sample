
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateUserInput {
    name?: Nullable<string>;
}

export class UpdateUserInput {
    id?: Nullable<number>;
    name?: Nullable<string>;
}

export abstract class IMutation {
    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract removeUser(id: number): Nullable<RemoveResData> | Promise<Nullable<RemoveResData>>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
}

export abstract class IQuery {
    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;
}

export class RemoveResData {
    success?: Nullable<boolean>;
}

export class User {
    id?: Nullable<number>;
    name?: Nullable<string>;
}

type Nullable<T> = T | null;
