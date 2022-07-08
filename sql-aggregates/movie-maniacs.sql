SELECT "customers"."firstName", "customers"."lastName", sum("amount") as "total rental amount"
from "customers"
join "rentals" using ("customerId")
join  "payments" using ("rentalId")
group by "customers"."customerId"
order by "total rental amount" DESC
