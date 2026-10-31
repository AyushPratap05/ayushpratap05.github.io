## Full write-up

### The idea
Huddle is a feature for food delivery apps. One person starts a group order and shares a link. Everyone joins with their own name and number, picks their own items, and pays their own share. Nobody has to chase friends or colleagues for money.

### The problem
When a group orders together, one person usually pays the full bill and asks the others to send their share later. Some pay late, some never do, and the host is left out of pocket. The food also arrives in one bag, so nobody knows whose item is whose.

### How it works
- **One invite link** for the group. Anyone who doesn’t want to order can leave.
- **Everyone sees their own bill:** their items, 5% GST on items, and an equal share of delivery and platform charges.
- **A pay timer** starts once everyone is in. The order is placed when everyone has paid, and leaving closes once the timer starts.
- **No-shows:** if someone doesn’t pay in time, the order goes ahead without them. They owe their share of the shared charges, saved to their account and added to their next order, like a cancellation fee. This shows only on their own screen, not on the bill.
- **The restaurant** gets one bulk order with each item tagged by the person’s name, with veg and non-veg marks, and can print a sticker for every packed item.
- **Any app:** the prototype switches between Zomato, Swiggy, Zepto and Blinkit colors, so the idea can go to more than one company.

### Choices I made
- **Equal split of shared charges:** simple and easy to explain.
- **No-shows owe only the shared charges:** it is fair to the people who paid, and it discourages backing out.
- **The timer, not trust:** payment happens inside the app within a set time, so the host never fronts the money.

### About the prototype
It runs on simulated data and isn’t connected to a real store. The demo timer is 60 seconds.

### Next steps
- Talk to 5 to 8 people who order food in groups, and write down what they say.
- Try different timer lengths in a small pilot.
- Track the share of group orders that are fully paid, the no-show rate, and how many group orders are completed.
