select "a"."line1","c"."name" as "City","a"."district","country"."name" as "Country"
from "addresses" as "a"
join  "cities" as "c" using ("cityId")
join "countries" as "country" using ("countryId")
