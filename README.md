adds a parameter to not store messages into archive

```
import nostore from 'stanza.io-no-store'
...
client.use(nostore);

client.sendMessage({
  to: 'foo@bar.com',
  body: 'This message will not be stored into message archive',
  noStore: true
});
```
