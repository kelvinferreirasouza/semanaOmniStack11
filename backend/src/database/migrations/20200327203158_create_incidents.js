exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table) {
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('hospital_id').notNullable();
        table.foreign('hospital_id').references('id').inTable('hospitals');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};