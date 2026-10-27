## Full write-up

### Problem
AI-powered GitHub search tools find repositories from natural-language queries, but relevance alone does not make a result useful today. Users get repositories that are years old, inactive or built on outdated technology, and a high star count makes old projects look attractive. People end up opening several repositories to check commits, releases and issues by hand.

### Who it's for
- **Students and beginners:** need simple, current projects and clear signs that a repository is active.
- **Working developers:** want relevant, maintained options without inspecting each one.
- **AI and data practitioners:** work in a fast-moving field where an old, highly starred repository can be outdated.

### Insight
The gap is between finding a repository and finding one worth using. Age alone is not a quality signal, since some mature projects are stable on purpose. The goal is to surface maintenance as a ranking signal, not to hide old repositories.

### Decision
Rank by a simple, explainable score: semantic relevance, plus language and requirement match, plus a freshness and maintenance signal. A very old repository with a perfect match can lose to a slightly less similar one that is actively maintained. Each result shows why it was recommended, for example "high semantic match and recently updated".

### MVP scope
- Natural-language search with semantic ranking
- Freshness-aware ranking
- Top 5 results with language, stars, last updated date and the reason for the ranking
- Filters for language and freshness (6 months, 1 year, 2 years)

### How I'll measure it
Compare version A (semantic-only) against version B (semantic plus freshness) on a small set of labelled queries. Metrics: relevant result rate, fresh result rate, top-5 success rate, click-through rate, search reformulation rate and time to a useful repository.

### Status
In progress. I have written the PRD and I'm building the data pipeline that combines semantic relevance with freshness and maintenance signals.
