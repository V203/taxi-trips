




create table region(id int not null,name text not null );
create table taxi(id serial primary key ,reg_number text not null,region_id int not null, foreign key(region_id) references region(id));
create table route(id serial primary key ,name text not null,fare_per_trip decimal( 10,02),region_id int not null );


create table trip(
    route_id int not null,
    taxi_id int not null,
    fare_total decimal(10,02) not null


--   foreign key (route_id) references route(id)

);