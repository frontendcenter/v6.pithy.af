# pithy.af (version 6)

Built for [Front End Center Episode 16—Snapshot Rendering: The Sweet Spot for JS Apps](https://frontend.center/ep16-snapshot-rendering-the-sweet-spot-for-js-apps). This is the first time the codebase has gone beyond a simple placeholder and is starting to look like a real app.

Changes between v5 and v6 (not covered by the episode)

* Connecting to an API that's serving the quote data
* Routing: a page per author, per work, and per quote.

This episode is mostly concerned with "Snapshot Rendering" using [react-snapshot](https://github.com/geelen/react-snapshot), and so to understand _how easy React Snapshot is to integrate_:

### [View the diff before and after adding react-snapshot](https://github.com/frontendcenter/v6.pithy.af/compare/nosnapshot...master?diff=unified&name=master&w=1)

![Diff summary between nosnapshot and master branches](https://dl.dropboxusercontent.com/u/1349167/react%20snapshot%20diff.png)

### Live version with snapshot rendering: [v6.pithy.af](http://v6.pithy.af)

First meaningful paint after **891ms**

Fonts fully loaded after **2.2s**

![Performance snapshot of pithy with snapshot rendering](https://dl.dropboxusercontent.com/u/1349167/performance-pithy-v6-with-snapshots.png)

### Live version without snapshot rendering: [v6-nosnapshot.pithy.af](http://v6-nosnapshot.pithy.af/)

First meaningful paint (visually complete) after **2.72s**

![Performance snapshot of pithy without snapshot rendering](https://dl.dropboxusercontent.com/u/1349167/performance-pithy-v6-no-snapshots.png)
