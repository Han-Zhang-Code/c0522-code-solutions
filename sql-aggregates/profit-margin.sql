with "revenue" as (
  SELECT "films"."title","films"."description","films"."rating", sum("payments"."amount") as "totalAvenue"
  from "films"
  join "inventory" using("filmId")
  join "rentals" using("inventoryId")
  join "payments" using ("rentalId")
  group by "filmId"
  order by "totalAvenue" DESC
),

 "cost" as (
  select "films"."title", sum("replacementCost") as "totalCost"
  from "films"
  join "inventory" using("filmId")
  group by "films"."title"
  order by "totalCost" DESC
)
  select "title","description","rating", "revenue"."totalAvenue"-"cost"."totalCost" as "totalProfit"
  from "cost"
  join "revenue" using ("title")
  order by "totalProfit" DESC
  LIMIT 5
