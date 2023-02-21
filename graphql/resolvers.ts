import { User, getUser,CreateUser,UpdateUser,DeleteUser } from "../controller/users";

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

export default {
  Query: {
    hello: () => "hello",
    async User() {
      let res = await User();
      // console.log(res);
      return res;
    },
    async getUser(_: any, args: { _id: string }) {
      console.log(args);
      let res = await getUser(args._id);
      console.log(res);
      return res;
    }
  },
  Mutation: {
    async createUser(_: any, args: { _id: string, user: UserModify }) {
      // console.log(args);
      let res=await CreateUser(args.user);
      console.log(res);
      return { msg: "ok", status: "200" };
    },
    async updateUser(_: any, args: { _id: string, user: UserModify }) {
      // console.log(args);
      let res=await UpdateUser(args._id,args.user);
      console.log(res);
      return { msg: "ok", status: "200" };
    },
    async deleteUser(_: any, args: { _id: string}) {
      // console.log(args);
      let res=await DeleteUser(args._id);
      console.log(res);
      return { msg: "ok", status: "200" };
    }
  }
};