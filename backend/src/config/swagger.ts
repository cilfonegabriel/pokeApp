import swaggerJSDoc from 'swagger-jsdoc'

const options : swaggerJSDoc.Options = {
    swaggerDefinition : {
        openapi: '3.0.0',
        tags: [
            {
                name: 'Pokemon',
                description: 'Api operations related to Pokemons',
            }
        ],
        info : {
            title: 'REST API Node.js / Express / TypeScript',
            version: '1.0.0',
            description: 'API Docs for Pokemons'
       }
    },
    apis: ['./src/router.ts']
}

const swaggerSpec = swaggerJSDoc(options)
export default swaggerSpec