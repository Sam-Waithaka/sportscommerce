import { Express } from "express";

export const createCatalogRoutes = (app: Express)=>{
    app.get('/', (req, res)=>{
        // res.send("Hello sportsstore route")
        res.render('index')
    })

    app.get('/err', (req, res)=>{
        throw new Error ('Something bad happened')
    })

    app.get('/asyncerr', async (req, res)=>{
        throw new Error ('Something bad happened asynchronously')
    })
}