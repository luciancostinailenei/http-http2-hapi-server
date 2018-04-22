# http-http2-hapi-server
NodeJS server built with Hapi framework, running on both HTTP and HTTP2. Used for demonstrating HTTP2 capabilities.

## How to run ?

1.  Clone the repository
2.  Navigate to project's folder
3.  Open up a terminal window
4.  Run **npm install** command and wait for the dependencies to be downloaded
5.  Run **node index-http.js** command in order to run the HTTP based server 
6.  HTTP based server can now be accessed at http://localhost:4000
7.  Open up a new terminal window
8.  Run **node index-http2.js** command in order to run the HTTP2 based server  
9.  HTTP2 based server can now be accessed at https://localhost:3000

Obs.: For demo purposes, an index.html page with an image built from multiple small image squares will be displayed. 
In order to notice the differences and highlight HTTP2's capabilities and new features, open up Chrome Developer Tools, go to Network tab,
throttle the network to Slow 3G connection and analyse the resources loading waterfall
