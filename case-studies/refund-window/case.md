## Full write-up

### Problem
Some customers buy clothes, wear them, and return them for a full refund. Honest customers and sellers pay for it. A return policy needs to protect sellers without making returns hard for people with a real problem.

### Decision
Refund or exchange is available for 24 hours after delivery. After that, only an exchange is possible: no refund and no store credit. If the item is defective or wrong, a verified exception keeps the refund available at any time.

### Why this design
- A short window makes use-and-return unattractive, because there is little time to wear and return an item.
- Exchange-only after the window still gives customers a way out if the size or fit is wrong.
- The defect exception keeps the policy fair, so quality problems are never the customer's cost.

### Next
Generalize the policy for large marketplaces and add a demo walkthrough.
