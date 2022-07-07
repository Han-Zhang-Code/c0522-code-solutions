select "countries"."name",count(*) as "Number of Cities"
from "cities"
join "countries" using("countryId")
group by "countryId"
