insert into region(id,name) values (1,'Durban');
insert into region(id,name) values (2,'Cape Town');
insert into region(id,name) values (3,'Gauteng');


insert into route(name,fare_per_trip ,region_id) values('umlazi',210.00,1);
insert into route(name,fare_per_trip ,region_id) values('umhlanga',238.00,1);
insert into route(name,fare_per_trip ,region_id) values('umbilo',98.00,1);


insert into route(name,fare_per_trip,region_id) values('bellville',203.00,2);
insert into route(name,fare_per_trip,region_id) values('guglethu',168.00,2);
insert into route(name,fare_per_trip,region_id) values('langa',112.00,2);


insert into route(name,fare_per_trip,region_id) values('sandton-randburg',119.00,3);
insert into route( name,fare_per_trip,region_id) values('sandton-alexandra',119.00,3);
insert into route(name,fare_per_trip,region_id) values('sandton-midrand',119.00,3);

insert into taxi(reg_number,region_id) values('ZN1111',1);
insert into taxi(reg_number,region_id) values('ZN5555',1);
insert into taxi(reg_number,region_id) values('ZN2222',1);
insert into taxi(reg_number,region_id) values('CA1111',2);
insert into taxi(reg_number,region_id) values('CY5555',2);
insert into taxi(reg_number,region_id) values('CJ2222',2);
insert into taxi(reg_number,region_id) values('DZ1111',3);
insert into taxi(reg_number,region_id) values('DD5555',3);
insert into taxi(reg_number,region_id) values('DH2222',3);