import { User } from "../../models/user.model";
import UserModel from "../models/user";

export async function getAllUsers() {
    return await UserModel.findAll();
}

export async function createUser(user: User) {
    const userCreated = await UserModel.create(user);
    return userCreated;
}

export async function getUserById(id: number) {
    return await UserModel.findByPk(id);
}

export async function editUser(id: number, user: User) {
    const userFound = await UserModel.findByPk(id);
    await userFound?.update(user);
    return await userFound?.save();
}

export async function deleteUser(id: number) {
    const userFound = await UserModel.findByPk(id);   
    return await userFound?.destroy();
}