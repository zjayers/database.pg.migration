/* eslint-disable camelcase */
exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
   CREATE TABLE comments (
   id SERIAL PRIMARY KEY,
   contents VARCHAR(240) NOT NULL,
   created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
   updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
   );
  `);
};

exports.down = (pgm) => {
  pgm.sql(`
  DROP TABLE comments;
  `);
};
