import { readFileSync } from "fs";
import { getEnviroment, Env } from "./enviroment";
import { merge } from "./merge";

const file = process.env.SERVER_CONFIG ?? 'server.config.json'
const data = JSON.parse(readFileSync(file).toString())

try{
    const envFile = getEnviroment().toString()+ '.' + file
    const envData = JSON.parse(readFileSync(envFile).toString())
    merge(data, envData)
} catch {

}

export const getConfig = (path: string, defaultVal: any = undefined): any =>{
    const paths = path.split(':')
    let val = data
    paths.forEach(p => val = val[p])
    return val ?? defaultVal
}

export {getEnviroment, Env}