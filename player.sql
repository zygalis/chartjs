drop database if exists programmer_query;

create database programmer_query;

use programmer_query;

create table programmer_data(
    id int unsigned not null auto_incerment primary key,
    age tinyint unsigned not null,
    gender tinyint nmot null,
    experience_years tinyint not null,
    programming tinyint not null,
    web_frontend tinyint not null,
    web_backend tinyint not null,
    mobile_native tinyint not null,
    mobile_hybrid tinyint not null,
    relational_database tinyint not null,
    nosql_database tinyint not null
) 

insert into `programmer_data` values (1,22,2,5,2,3,4,1,3,2,4), (1,22,2,2,2,3,4,1,5,2,2);
insert into `programmer_data` values (3,51,1,2,4,3,2,3,3,5,4), (4,60,1,1,5,1,4,3,5,2,2);