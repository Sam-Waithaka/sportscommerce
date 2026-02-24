import { Express } from "express";

export const createCatalogRoutes = (app: Express)=>{
    app.get('/', (req, res)=>{
        // res.send("Hello sportsstore route")
        res.render('index')
    })
}