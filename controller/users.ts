import { Next, ParameterizedContext } from "koa";
import Router from "koa-router";
import { users } from "../database/mongoose/index";

export const UserLogin = async (
  ctx: ParameterizedContext<any, Router.IRouterParamContext<any, {}>, any>,
  next: Next,
) => {
  ctx.body = 'ok';
};

export async function User() {
  return await users.find();
}

export async function getUser(_id: string) {
  return await users.findById(_id);
}

interface UserModify {
  name: String
  password: String
  age: Number
  sex: String
  phone: String
  email: String
  image: String
  myChannel: String
  describle: String
  subscribeCount: Number
}

export async function CreateUser(user: UserModify) {
  return await new users(user).save();
}

export async function UpdateUser(_id: string, user: UserModify) {
  return await users.findByIdAndUpdate(_id, user);
}

export async function DeleteUser(_id: String) {
  return await users.deleteOne({ _id });
}