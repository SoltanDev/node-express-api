# node-express-api :book:

A little Rest API with express and node.js
this is a soccer teams and players API

#### Clone the repo

```bash
$ git clone https://github.com/SoltanDev/node-express-api.git
```

#### Install the dependencies by running:

```bash
$ npm install
```

#### Start the app using:

```bash
$ npm start
```

#### Open your browser and go to:

`localhost:8000/api/players`

---

# Resources:

- [Player](#Player)
- [Team](#team)
- [League](#league)

---

### Player:

A player model have this properties:

```javascript
{
  "data": {
      "_id": String,
      "name": String,
      "club": String,
      "league": String
  }
}
```

<table>
<tr>
<th>method</th>
<th>endpoint</th>
<th>status</th>
<th>response</th>
</tr>
<tr>
  <td>GET</td>
  <td>/api/players</td>
  <td>200</td>
  <td>return collection of players</td>
</tr>
<tr>
  <td>POST</td>
  <td>/api/players</td>
  <td>201</td>
  <td>creates a player model</td>
</tr>
<tr>
  <td>GET</td>
  <td>/api/players/{id}</td>
  <td>200</td>
  <td>returns a player model</td>
</tr>
<tr>
  <td>PUT</td>
  <td>/api/players/{id}</td>
  <td>200</td>
  <td>updates a player model</td>
</tr>
<tr>
  <td>DELETE</td>
  <td>/api/players/{id}</td>
  <td>200</td>
  <td>delete a player model</td>
</tr>
</table>

---

### Team

A team model have this properties:

```javascript

```

<table>
<tr>
<th>method</th>
<th>endpoint</th>
<th>status</th>
<th>response</th>
</tr>
<tr>
  <td>GET</td>
  <td>/api/teams</td>
  <td>200</td>
  <td>return collection of teams</td>
</tr>
<tr>
  <td>POST</td>
  <td>/api/teams</td>
  <td>201</td>
  <td>creates a team model</td>
</tr>
<tr>
  <td>GET</td>
  <td>/api/teams/{id}</td>
  <td>200</td>
  <td>returns a team model</td>
</tr>
<tr>
  <td>PUT</td>
  <td>/api/teams/{id}</td>
  <td>200</td>
  <td>updates a team model</td>
</tr>
<tr>
  <td>DELETE</td>
  <td>/api/teams/{id}</td>
  <td>200</td>
  <td>delete a team model</td>
</tr>
</table>

---
