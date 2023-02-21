// The GraphQL schema
export default `#graphql
  type User{
    _id:ID!
    name: String
    password:String
    age:Int
    sex: String
    phone: String
    email:String
    image:String
    myChannel: String
    describle: String
    subscribeCount:Int
    createAt:String
    updateAt:String
  }

  #directive @uppercase on FIELD_DEFINITION
  #directive @include(if:Boolean) on FIELD_DEFINITION
  #directive @deprecated( reason: String = "No longer supported" ) on FIELD_DEFINITION | ARGUMENT_DEFINITION | INPUT_FIELD_DEFINITION | ENUM_VALUE
  directive @upper on FIELD_DEFINITION
  type Query {
    hello: String @upper
    User: [User]!
    getUser(_id:ID!): User
  }

  input UserModify{
    name: String
    password:String
    age:Int
    sex: String
    phone: String
    email:String
    image:String
    myChannel: String
    describle: String
    subscribeCount:Int
  }

  type ModifyResult{
    msg:String
    status:String
  }

  type Mutation{
    createUser( user: UserModify ):ModifyResult
    updateUser( _id: ID!, user: UserModify ):ModifyResult
    deleteUser( _id: ID! ):ModifyResult
  }
`;