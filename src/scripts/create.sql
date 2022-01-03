drop database if exists phrases;
create database phrases;
use phrases;

create table phrase(
    id bigint primary key auto_increment,
    author varchar(100) not null,
    txt varchar(255) not null
);
