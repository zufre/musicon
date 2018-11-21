/* General Rulesets */
* {
  color: #ffffff;
}

body {
  font-family: Helvetica, sans-serif;
	background: url("https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/musicon_bg.png") no-repeat center center fixed;
  background-size: cover;
}

a {
  text-decoration: none;
}

footer {
  width: 100%;
  text-align: center;
  bottom: 0;
  position: static;
}

header {
  padding-top: 3%;
  min-height: 70px;
}

.container {
	width: 90%;
  margin: 0 auto;
}

.branding {
  float: left;
}

.branding h1 {
  font-weight: normal;
}

nav {
  float: right;
}

.navbar {
  margin-top: 15%;
}

.navbar li {
  display: inline-block;
  padding: 0 5px;
}

.navbar li a {
  color: rgba(255, 255, 255, 0.8);
  font-weight: normal;
}

.navbar li a:hover, .navbar .current a {
  color: #ffffff;
}

/* Home Page Rulesets */

#introduction {
text-align: center;
  margin-top: 15%;
  margin-bottom: 50%;
}

#introduction h1 {
  font-size: 60px;
}

#introduction p {
  margin: 10% auto;
  font-size: 18px;
  font-weight: lighter;
}

#introduction a {
  display: block;
  width: 20%;
  padding: 3% 8%;
  margin: 0 auto;
  color: #ffffff;
  background-color: #4c7ef3;
  border-radius: 4px;
}

#introduction a:hover {
  background-color: #26A69A;
}

/* Store Page Rulesets */

#showcase {
  margin-top: 5%;
  margin-bottom: 15%;
}

.instrument {
  width: 90%;
  overflow: auto;
	background-color: rgba(255, 255, 255, 0.9);
  padding: 2%; 5%;
  margin: 5% auto;
  border-radius: 5px;
}

.image {
  display: inline-block;
  vertical-align: middle;
  width: 32%;
  min-width: 100px;
  margin: 0 auto;
}

.details {
  display: inline-block;
  vertical-align: middle;
  width: 60%;
  margin: -1% auto;
  padding: 2%;
}

.name, .description, .price, del {
  color: #000000;
  text-align: left;
}

.description, .price {
  margin-top: 0;
  margin-bottom: 16px;
}

.description {
  height: 100%;
  font-size: 13px;
  overflow: auto;
}

.price {
  margin: 0;
  font-size: 16px;
  font-weight: bold;
}

.sale {
  margin-top: 0;
  margin-bottom: 0;
  color: #fa4359;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
}

/* Contact Page Rulesets */

#connection {
  width: 100%;
  margin: 15% auto;
  text-align: center;
}

#top {
  margin: 15% auto;
}

#top h2 {
  margin: 3%
  font-size: 30px;
  font-weight: normal;
}

#top p {
  margin: 3%
  font-size: 18px;
  font-weight: lighter;
}

.contact {
  width: 100%;
  margin: 10% auto;
}

.contact p, .contact ul {
  margin: 1%;
  font-size: 16px;
  font-weight: lighter;
}

#location {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
