<template>
  <div id="app">
    <h1 id="title">Tour of Heroes</h1>
    <div id="nav">
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/heroes">Heroes</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
/* Master Styles */
h1 {
  color: #369;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 250%;
}
h2, h3 {
  color: #444;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
}
body {
  margin: 2em;
}
body, input[text], button {
  color: #888;
  font-family: Cambria, Georgia;
}
a {
  cursor: pointer;
  cursor: hand;
}
button {
  font-family: Arial;
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  cursor: hand;
}
button:hover {
  background-color: #cfd8dc;
}
button:disabled {
  background-color: #eee;
  color: #aaa;
  cursor: auto;
}

/* Navigation link styles */

div #nav * {
  padding: 5px 10px;
  text-decoration: none;
  margin-right: 10px;
  margin-top: 10px;
  display: inline-block;
  background-color: #eee;
  border-radius: 4px;
}

div #nav *:visited, #nav *:link {
  color: #607D8B;
}

div #nav *:hover {
  color: #039be5;
  background-color: #CFD8DC;
}
div #nav *.active {
  color: #039be5;
}

#title {
  font-size: 1.2em;
  color: #999;
  margin-bottom: 0;
}

/* everywhere else */
* {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
