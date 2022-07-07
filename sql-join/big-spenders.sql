select "amount", "firstName","lastName"
from "customers"
join "payments" using ("customerId")
order by "amount" DESC
LIMIT 10
