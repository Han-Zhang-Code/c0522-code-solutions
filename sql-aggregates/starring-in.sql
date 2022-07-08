select "genres"."name", count(*) as "Number of Genreld"
from "genres"
join "filmGenre" on "genres"."genreId"="filmGenre"."genreId"
join "castMembers" using("filmId")
join "actors" using("actorId")
where "firstName"='Lisa' and "lastName"='Monroe'
GROUP by "genres"."name"
