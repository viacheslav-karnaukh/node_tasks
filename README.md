# Node.js tasks


### filter_files

```sh
# input
node filter_files . md
# output
README.md

# input
node filter_files ./filter_files js
# output
filterFiles.js
index.js
```

### http_collect

```sh
# input
node http_collect https://api.chucknorris.io/jokes/random

# output
348
{"category":null,"icon_url":"https:\/\/assets.chucknorris.host\/img\/avatar\/chuck-norris.png","id":"JxQjAOINTXqn9k72M74DCQ","url":"http:\/\/api.chucknorris.io\/jokes\/JxQjAOINTXqn9k72M74DCQ","value":"CHUCK NORRIS IS THE REASON HITLER KILLED HIMSELF. HE KNEW HE COULD NOT TAKE OVER THE WORLD WITH HIM STILL IN IT. NOBODY CAN TELL CHUCK WAT TO DO."}
```

### timeserver

```sh
# input
node timeserver 5555
curl http://localhost:5555

# output
2017-05-14 16:35
```

### fileserver

```sh
# input
node fileserver 5555 "$(pwd)/README.md"
curl http://localhost:5555

# output
# prints README.md file content
```

### http_uppercaserer

```sh
# input
node http_uppercaserer 5555
curl -d 'hello world' http://localhost:5555

# output
HELLO WORLD
```

### json_api_server

```sh
# input
node json_api_server 5555
curl "http://localhost:5555/api/unixtime?iso=$(date -u +"%Y-%m-%dT%H:%M:%SZ")"

# output
{"unixtime":1494782494000}

# input
curl "http://localhost:5555/api/parsetime?iso=2017-05-14T17:30:55Z"

# output
{"hour":20,"minute":30,"second":55}
```
