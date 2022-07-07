select "genres"."name" as "Genres Name","releaseYear" as "Realse Year"
from "films"
join "filmGenre" using ("filmId")
join "genres" using ("genreId")
where "title"='Boogie Amelie'
