Simple SPA application with WebSocket protocol  

GitHub Pages Deploy:  
1. create git repository(GitHub) 'my-first-project'  
2. create local branch (git branch gh-pages)  
3. vue.config.js (root directory)  
    module.exports = {  
    publicPath: ‘/my-first-project/’  
    }  
4. remove ‘/dist’ from .gitignore  
5. npm run build  
6. git add dist && git commit -m "Initial dist subtree commit"  
make sure .gitignore contains .gitignore and vue.config.js  
7. git subtree push --prefix dist origin gh-pages  
8. Go to GitHub Settings of current repository  
