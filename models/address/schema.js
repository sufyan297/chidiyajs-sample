import { Types } from '@ascendtis/chidiya';

/*
  DDL

CREATE TABLE `addresses` (
  `id` char(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `user_id` char(36) NOT NULL,
  `line1` varchar(255) NOT NULL,
  `line2` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

*/
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
    name: {
      type: Types.String
    },
    user_id: {
      type: Types.ID
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