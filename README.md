## Dashboard auto

Coding style guild follow:

- typeScript https://google.github.io/styleguide/tsguide.html
- javaScript https://google.github.io/styleguide/jsguide.html

## Setup

- install Postgresql

Make Nextjs secret key
<code>npx auth secret</code>

### Postgresql

- list databases: <code> psql -l</code>
- create database: <code>createdb db_name</code>
- connect database: <code>psql -p 5432 -U user_name -d db_name -h localhost</code>

### Prisma

- migrate: <code>npx prisma migrate dev --name init-settings </code>
- update db: <code>npx prisma db pull</code>
- seed: <code>npx prisma db seed</code>
- check validate config: <code>npx prisma validate --config prisma.config.ts</code>
