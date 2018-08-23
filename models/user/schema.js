import Types from '@ascendtis/chidiya';

export default {
  name: "User",
  tableName: "Users",
  validation: true,
  columns: {
    id: {
      type: Types.ID,
      primary: true,
      generated: true
    },
    name: {
      type: Types.String
    },
    age: {
      type: Types.Int
    },
    username: {
      type: Types.String
    },
    password: {
      type: Types.String
    },
    created_at: {
      type: 'datetime' //We do not have support for `datetime` in ChidiyaJS as of now, So just directly specify `typeorm` type for columns.
    },
    updated_at: {
      type: 'datetime' //We do not have support for `datetime` in ChidiyaJS as of now, So just directly specify `typeorm` type for columns.
    }
  },
  timestamp: {
    onInsert: ['created_at'], //updated only on insert
    onUpdate: ['updated_at'] //always update
  },
  relations: {
    addresses: {
      type: 'one-to-many',
      target: 'Address', //modelName
      joinColumn: {
        name: 'user_id',//ForeginTable ColumnName
        referencedColumnName: 'id' //SameTable ColumnName
      },
      inverseSide: 'user' //You need to specify Address -> User relation in Address Model
    }
    //For More Information Regarding relations
    // http://typeorm.io/#/relations
  }
}