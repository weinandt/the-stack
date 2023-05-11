import express from "express"
import promClient from "prom-client"

// This method is called when someone hits the /metrics endoint.
promClient.collectDefaultMetrics()


const app = express()

// Setting up an endpoint for prometheus server to call and scrape metrics.
app.get('/metrics', async (req, res) => {
    try {
        res.set('Content-Type', promClient.register.contentType);
        res.end(await promClient.register.metrics());
    } catch (ex) {
        res.status(500).end(ex);
    }
})

const port = 4000
app.listen(port, () => {
    console.log(`Go to http://localhost:${port}/metrics to see metrics`)
})