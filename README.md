# insufficient-fare
Calculate what amount needs to be added to a MTA metrocard to minimize residual balance.
# Variables used in script
| Variable name   | Denotes     | Default   | Unit
| ---:            | :---        | :---      | :---
| `BuyUnit`       | Minimal currency accepted in vending machines. | `0.05` (5 ct) | $
| `SingleFare`    | Price of a single fare. Change to `1.35` to calulate reduced fare. | `2.75` | $
| `BonusThres`    | Bonus threshold. Minimum amount to buy to activate bonus. The bonus will be applied when the purchase is this (or larger) amount. | `5.50` | $
| `BonusPerc`     | Applied bonus. Note this value < 1. For 11% bonus use 1.11. | `1.11` |
| `UseBonus`      | Flag to makes sure the amount will enable bonus. If `false` the nearest round amount is calculated without applying the bonus | `true` | (boolean) 
| `FixRounding`   | Continue to find a amount that leaves no residual. If `false` the algoritm stops at an amount `< BuyUnit` | `true` | (boolean)
| `Silent`        | Debug variable. If `false` the function will be more verbose | `true` | (boolean)
