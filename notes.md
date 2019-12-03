# Routing Notes

## Terminology

Separation of Concerns answers _"who should be doing this?"_

## Routing

- use it to break up an application/api into sub applications
- picking the code to execute based on URL and HTTP Method
- used for managing sub resources (the comments on a blog post) 

# Query String Parameters

The client can send data to the server inside:
- body
- URL parameters
- query string parameters (part of the URL)
- headers (we will learn this later)

Example:

https: //www.googl.com
/search ------> path (routing handles that)
? ------------> marks the beginning of the query string parameters
source = hp --> key/value the pair is separated by an =
& ------------> separates key/value pairs
ei=3a7mXbHqJczm-gSzn6jIBw&q=rubber+ducking$oq=rubber+ducking

Query String Parameters is typically used when you are on a website and filter through things to find. Like on DSW shopping for shoes and you are filtering results by shoe size, type, color, etc.

Translates to an object 