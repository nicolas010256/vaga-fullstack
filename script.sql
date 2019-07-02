create database `teste_redfox`;

use `teste_redfox`;

create table if not exists `pokemon` (
	`id` int primary key,
    `pokedex_number` int,
    `name` varchar(60),
    `img_name` varchar(30),
    `generation` tinyint,
    `evolution_stage` tinyint,
    `evolved` tinyint,
    `family_id` int,
    `cross_gen` tinyint,
    `atk` int,
    `def` int,
    `sta` int,
    `legendary` tinyint,
    `aquireable` tinyint,
    `spawns` tinyint,
    `regional` tinyint,
    `raidable` tinyint,
    `hatchable` tinyint,
    `shiny` tinyint,
    `nest`tinyint,
    `new` tinyint,
    `not_gettable` tinyint, 
    `future_evolve` tinyint,
    `cp_at_39` int,
    `cp_at_40` int
);

create table if not exists `type` (
	`id` int primary key auto_increment,
    `name` varchar(50)
);

create table if not exists `weather` (
	`id` int primary key auto_increment,
    `name` varchar(50)
);

create table if not exists `pokemon_has_type` (
	`id_pokemon` int,
    `id_type` int,
    `index` tinyint,
    
    constraint `pk_pokemon_has_type` primary key (`id_pokemon`, `id_type`)
);

create table if not exists `pokemon_has_weather` (
	`id_pokemon` int,
    `id_weather` int,
    `index` tinyint,
    
    constraint `pk_pokemon_has_weather` primary key (`id_pokemon`, `id_weather`)
    
);

alter table `pokemon_has_type` add constraint `fk_pokemon_has_type_pokemon` foreign key (`id_pokemon`) references `pokemon` (`id`) on delete cascade;
alter table `pokemon_has_type` add constraint `fk_pokemon_has_type_type` foreign key (`id_type`) references `type` (`id`) on delete cascade;
alter table `pokemon_has_weather` add constraint `fk_pokemon_has_weather_pokemon` foreign key (`id_pokemon`) references `pokemon` (`id`) on delete cascade;
alter table `pokemon_has_weather` add constraint `fk_pokemon_has_weather_weather` foreign key (`id_weather`) references `weather` (`id`) on delete cascade;
