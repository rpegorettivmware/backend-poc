import * as userRepository from "../../db/repositories/userRepository";

import { User } from "../../models/user.model"

export async function getUsers() {
    return await userRepository.getAllUsers();
}

export async function createUser(user: User) {
    if (!user || !user.firstName || !user.lastName || !user.age || !user.email) {
        throw new Error('Prencha todos os dados necessários!')
    }
    return await userRepository.createUser(user);
}

export async function getUserById(userId: number) {
    if (!userId) {
        throw new Error('Id do usuário é necessário!')
    }
    const userFound = await userRepository.getUserById(userId);
    if (!userFound) {
        throw new Error('Usuário não encontrado')
    }
    return userFound
}

export async function editUserById(userId: number, user: User) {
    if (!userId) {
        throw new Error('Id do usuário é necessário!')
    }
    return await userRepository.editUser(userId, user);
}

export async function deleteUserById(userId: number) {
    if (!userId) {
        throw new Error('Id do usuário é necessário!')
    }
    return await userRepository.deleteUser(userId);
}