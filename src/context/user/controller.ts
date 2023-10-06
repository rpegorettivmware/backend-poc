import * as userDomain from '../../domain/user';
import logger, { LoggerEvents } from '../../helpers/logger';


export async function getAllUsers(req: any, res: any): Promise<any> {
  try {
    const users = await userDomain.getUsers()
    logger.emit(LoggerEvents.LOG, `Users searched successfully`)
    logger.emit(LoggerEvents.LOG, JSON.stringify(users))
    return res.json(users);
  } catch (error) {
    logger.emit(LoggerEvents.ERROR, error, 500)
    return res.json(error)
  }
}

export async function createUser(req: any, res: any): Promise<any> {
  try {
    const userCreated = await userDomain.createUser(req?.body)
    logger.emit(LoggerEvents.LOG, `User with id ${userCreated.id} created successfully`)
    logger.emit(LoggerEvents.LOG, JSON.stringify(userCreated))
    return res.json(userCreated);
  } catch (error) {
    logger.emit(LoggerEvents.ERROR, error, 500)
    return res.json(error)
  }
}

export async function getUserById(req: any, res: any): Promise<any> {
  try {
    const user = await userDomain.getUserById(parseInt(req?.params?.id))
    logger.emit(LoggerEvents.LOG, `User with id ${user.id} searched successfully`)
    logger.emit(LoggerEvents.LOG, JSON.stringify(user))
    return res.json(user);
  } catch (error) {
    logger.emit(LoggerEvents.ERROR, error, 500)
    return res.json(error)
  }
}

export async function editUser(req: any, res: any): Promise<any> {
  try {
    const user = await userDomain.editUserById(parseInt(req?.params?.id), req?.body)
    logger.emit(LoggerEvents.LOG, `User with id ${user?.id} updated successfully`)
    logger.emit(LoggerEvents.LOG, JSON.stringify(user))
    return res.json(user);
  } catch (error) {
    logger.emit(LoggerEvents.ERROR, error, 500)
    return res.json(error)
  }
}

export async function deleteUser(req: any, res: any): Promise<any> {
  try {
    const user = await userDomain.deleteUserById(parseInt(req?.params?.id))
    logger.emit(LoggerEvents.LOG, `User with id ${req?.params?.id} deleted successfully`)
    return res.json(JSON.stringify(req?.params?.id));
  } catch (error) {
    logger.emit(LoggerEvents.ERROR, error, 500)
    return res.json(error)
  }
}