import * as userDomain from '../../domain/user';


export async function getAllUsers(req: any, res: any): Promise<any> {
  try {
    const users = await userDomain.getUsers()
    return res.json(users);
  } catch (error) {
    return res.json(error)
  }
}

export async function createUser(req: any, res: any): Promise<any> {
  try {
    const userCreated = await userDomain.createUser(req?.body)
    return res.json(userCreated);
  } catch (error) {
    return res.json(error)
  }
}

export async function getUserById(req: any, res: any): Promise<any> {
  try {
    const user = await userDomain.getUserById(parseInt(req?.params?.id))
    return res.json(user);
  } catch (error) {
    return res.json(error)
  }
}

export async function editUser(req: any, res: any): Promise<any> {
  try {
    const user = await userDomain.editUserById(parseInt(req?.params?.id), req?.body)
    return res.json(user);
  } catch (error) {
    return res.json(error)
  }
}

export async function deleteUser(req: any, res: any): Promise<any> {
  try {
    const user = await userDomain.deleteUserById(parseInt(req?.params?.id))
    return res.json(user);
  } catch (error) {
    return res.json(error)
  }
}