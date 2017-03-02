# insufficient-fare
Calculate what amount needs to be added to a MTA metrocard to minimize residual balance.
## Variables used in script
| Variable name   | Denotes     | Default   | Unit
| ---:            | :---        | :---      | :---
| `BuyUnit`       | Smallest currency accepted in vending machines. | `0.05` (5 ct) | $
| `SingleFare`    | Price of a single fare. Change to `SingleFare = 1.35` to calulate reduced fare. | `2.75` | $
| `BonusThres`    | Bonus threshold. Minimum purchase to activate bonus. | `5.50` | $
| `BonusPerc`     | Applied bonus. Note this is < 1. For a bonus of 11% use `BonusThres = 1.11`. | `1.11` |
| `UseBonus`      | Make sure that the purchase is high enough to enable bonus. If `false` the nearest round amount is calculated without applying the bonus | `true` | (boolean) 
| `FixRounding`   | Continue to find a amount that leaves no residual. If `false` the algoritm stops at an amount `"residual" < BuyUnit` | `true` | (boolean)
| `Silent`        | Debug variable. If `false` the function will be more verbose | `true` | (boolean)
