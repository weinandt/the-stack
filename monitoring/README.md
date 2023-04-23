# Monitoring

Prometheus and Grafana.

## To Run
1. `docker-compose up`
2. Go to grafana: `http://localhost:3000`
    - User/pass: admin/admin
3. Add prometheus as a datasource
    - Settings -> Datasources -> Prometheus (should be installed by default)
    - Fill in the URL for prometheus and click "Save and Test"
        - If running in docker-compose, don't use localhost as the URL. Use: http://prometheus:9090
            - Assuming the prometheus container is called prometheus.

Grafana changes will saved, even if docker-compose down is run as the grafana db is configured to use a named volume.

## Prometheus
- To see how much space is consumed by various metrics: http://localhost:9090/tsdb-status

## Hooking up Grafana and Prometheus
Grafana ships with built in prometheus support: https://grafana.com/docs/grafana/latest/datasources/prometheus/

## Keeping grafna datsources in source code

https://grafana.com/docs/grafana/latest/administration/provisioning/#data-sources