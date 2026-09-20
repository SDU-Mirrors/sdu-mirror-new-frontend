import serveStatic from 'serve-static'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default () => ({
    name: 'general-assets',
    configureServer(server) {
        const mockDataPath = path.resolve(__dirname, '../src/mock-data/markdown/')
        server.middlewares.use('/markdown', serveStatic(mockDataPath, {
            index: false,
            setHeaders: (res) => {
                res.setHeader('Access-Control-Allow-Origin', '*')
            }
        }))

        const jsonPath = path.resolve(__dirname, '../src/mock-data/json/')
        server.middlewares.use('/json', serveStatic(jsonPath, {
            index: false,
            setHeaders: (res) => {
                res.setHeader('Access-Control-Allow-Origin', '*')
            }
        }))
    }
})