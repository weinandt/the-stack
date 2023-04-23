# the-stack
Contains examples of various services and lanaguages which could make up a cloud stack.

## TODO
- Write up how to tell how much space prometheus metrics take up.
- Add scrape config to prometheus.
- Make sure prometheus config works.
- Set up prometheus config and properly volume mount it locally as read only
- Set up grafana config and properly volume mount it locally as read only
- Set up conf/provisioning so prometheus yaml can be checked into source.
- Figure out how how difference services can report metrics
    - Is it different tags?
    - How would individual ECS containers report memory with a tag.