import handlebars from 'vite-plugin-handlebars';
import data from "./data.json" assert{type:'json'};
import { defineConfig } from 'vite';
export default defineConfig ({
    base: '/Myweb/',
    build: {
        rollupOptions: {
            input : {
                main: 'index.html',
                bootstrap: 'index-bootstrap.html',
                materialize: 'index-materialize.html',
            }
        },
    },

    plugins: [handlebars({
      context : data
        
      
    })],
  });