import { Types } from '@ascendtis/chidiya';

export default {
  name: "Address", //modelName
  tableName: "addresses",
  validation: true,
  columns: {
    id: {
      type: Types.ID,
      primary: true,
      generated: true
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
        name: 'user_id', //SampleTable ColumnName
        referencedColumnName: 'id' //ForeignTable ColumnName
      },
      inverseSide: 'addresses' //You need to specify relations for `addresses` in UserModel.
    }
  }
}