/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
      CREATE TABLE posts
      (
          id   SERIAL PRIMARY KEY,
          url  varchar(300),
          lat  numeric,
          long numeric
      )
  `);
};

exports.down = (pgm) => {
  pgm.sql(`
      drop table posts;
  `);
};
