# AbuseIPDB client for Node.js
## Currently only checkip function is implemented

Usage: 
```typescript
import AbuseIPDBClient from "abuseipdb-node-client"

const abuseCheck = new AbuseIPDBClient({
    key: "Your key"
})

abuseCheck.checkIP("1.1.1.1").then(resp => {
    console.log(resp)
})
```