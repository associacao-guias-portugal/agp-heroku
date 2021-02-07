const { sitemapBuilder } = require('react-router-sitemap');
const { paramsApplier } = require('react-router-sitemap');
const { routes } = require('./routes');
const path = require('path'); 
const fs = require('fs');

// use your website root address here. Optimally you can
// include dev and production enviorenments with variable
const hostname = 'https://agp-projecto-deploy.herokuapp.com/#/';

// define our destination folder and sitemap file name
const dest = path.resolve('./public', 'sitemap.xml');

/* const config = {
	'/pedagogia/:tipo': [
    	{ tipo: [
        "ramo-avezinha", 
        "ramo-caravela" , 
        "ramo-moinho" , 
        "ramo-aventura" , 
        "dirigente" 
      ]},
    ],
	'/pedagogia/metodo-guidista/ferramentas/:ferramenta': [
      { ferramenta: [
        'compromisso', 
        'sistema-de-patrulhas', 
        'aprender-fazendo', 
        'auto-desenvolvimento-progressivo', 
        'simbolismo', 
        'cooperação-entre-jovens-e-adultos', 
        'atividades-ao-ar-livre', 
        'serviço-comunitario'
      ]},
    ],
	'/pedagogia/metodo-guidista/projetos/:projeto': [
      { projeto: [
        'ação-saca-rolhas',
        'vamos-utopiar', 
        'portugalta', 
        'ter-maos-grandes', 
        'vozes-contra-a-violencia'
      ]},
    ],
	'/publicações/noticias/:id': [
    	{ id: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10','11' ] },
    ],
	'/loja/:itemCategory': [
    	{ itemCategory: [ 'livros', 'fardas', 'diversos'] },
    ],
	'/contactos/:modo': [
    	{ modo: [ 'sede', 'formulario'] },
    ],
};
	 */
// Merge our route paths with config pattern    
//const paths = paramsApplier(routes, config);

// Generate sitemap and return Sitemap instance
// paste new paths constant with hostname
const sitemap = sitemapBuilder(hostname, routes);

// write sitemap.xml file in /public folder
// Access the sitemap content by converting it with .toString() method
fs.writeFileSync(dest, sitemap.toString())