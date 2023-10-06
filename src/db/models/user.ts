import { DataTypes, Model, Optional } from "sequelize";
import { User } from "../../models/user.model";
import sequelize from "../connection";

export interface UserInput extends Optional<User, 'id'> {}
export interface UserOuput extends Required<User> {}

class UserModel extends Model<User, UserInput> implements User {
    public id!: number;
    public firstName!: string;
    public lastName!: string;
    public age!: number;
    public email!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}


UserModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    tableName: 'users',
    timestamps: true,
    sequelize: sequelize
})


export default UserModel;