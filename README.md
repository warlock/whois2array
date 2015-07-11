## whois2array
Simple Whois to Array for Node.Js

----
## How to use:

```javascript
var whois2array = require('whois2array');

whois2array.whois("octozon.com", function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
}
``` 
