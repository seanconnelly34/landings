# Server info
- your frontend at the server are located at `/var/www/landingsurgeryforms.ca/html` and server `/var/www/landingsurgeryforms.ca/server`
- frontend is hosted with nginx web server, nginx file `/etc/nginx/sites-available/landingsurgeryforms.ca`, you shouldn't care much about that, exept you want to host another website.
- server is running in background using pm2, you can see the status of the pm2 apps with command `pm2 list`, other commands:
`pm2 restart server`
`pm2 logs server`
`pm2 delete server`
# Structure
- As you see now you have two projcets, frontend and backend, everythig in own folder.
# Changes that you should care about
- moved enviroment variables outisde in `.env` file
    ## frontend
        basicaly, if you ever decide to move your website to another domain, just change REACT_APP_SERVER_ADDRESS in `.env` file and do a `npm run build` again.
    ## backend
        same as above, all your env varialbes are in `env` file including nodemailer.
        - I have tried building from scrach the backend(didn't know that you are generating pdf etc. so I gave up.)
        but I've started very solid and secure server structure, maybe you want to refactore your code, i made a good start for you. `my_try.js`
"# landings" 
# landings
