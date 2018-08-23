import Types from '@ascendtis/chidiya';

export default {
  name: "Address", //modelName
  tableName: "addresses",
  validation: true,
  fields: {
    id: {
      type: Types.ID
    },
    user_id: {
      type: Types.ID
    },
    name: {
      type: Types.String
    },
    line1: {
      type: Types.String
    },
    line2: {
      type: Types.String
    },
    city: {
      type: Types.String
    },
    state: {
      type: Types.String
    }
  },
  relations: {
    user: {
      type: 'one-to-one',
      target: 'User',
      joinColumn: {
        name: 'id', //ForeginTable ColumnName
        referencedColumnName: 'user_id' //SameTable ColumnName
      },
      inverseSide: 'addresses' //You need to specify relations for `addresses` in UserModel.
    }
  }
}