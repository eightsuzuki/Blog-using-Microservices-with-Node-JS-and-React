# Blog Application Overview

## Description
This blog web application was developed for learning purposes and incorporates several key features, including post creation/editing/deletion, commenting on posts, and comment moderation.

![App Demonstration](./images/Description/app-demonstration.png)

## Application Architecture

The blog app follows a microservices architecture, comprising six independent services: Client, Posts, Comments, Moderation, Query, and Event Bus. Deployed within a Kubernetes cluster, an ingress controller handles traffic distribution to each service. The microservices communicate through events emitted during specific actions, creating a seamless and modular architecture.

![App Overview](./images/App-Overview/blog-app-overview.jpg)

### Client Service
The Client service provides the React app, facilitating user interactions with other services. For instance, when a user submits a post, the Client service initiates an HTTP POST request to the Posts service.

### Posts Service
Responsible for post management, the Posts service handles creation, editing, and deletion. It maintains a MongoDB database for storing posts and emits events (e.g., PostCreated) upon these actions. The Event Bus relays these events to the Query Service for centralized handling.

![Posts Service Overview](./images/App-Overview/posts-service-overview.jpg)

### Comments Service
The Comments service oversees comment creation and moderation. Comments are stored in a MongoDB database, and the service emits a CommentCreated event upon insertion. After moderation by the Moderation service, the Comments service updates the Query service to reflect the comment's status.

![Comments Service Overview](./images/App-Overview/comments-service-overview.jpg)

### Moderation Service
The Moderation service moderates comments by checking for predefined "NG words." If found, the comment is marked as 'rejected.' The React app filters out comments with a 'rejected' status.

![Moderation Service Overview](./images/App-Overview/moderation-service-overview.jpg)

### Query Service
The Query service consolidates posts and comments, maintaining its database for efficient data retrieval. This service eliminates the need for individual requests to the Posts and Comments services, ensuring optimal performance. Even during downtime, the Query service ensures uninterrupted access to posts and comments.

![Query Service Overview](./images/App-Overview/query-service-overview.jpg)

### Event Bus Service
The Event Bus service acts as a mediator, facilitating event communication among services. Employing a Pub/Sub model, events are published onto a shared bus and delivered to respective subscribers. Notably, the Event Bus supports event replay, ensuring seamless event delivery even after service downtime.

![Event Bus Service Overview](./images/App-Overview/event-bus-service-overview.jpg)

This microservices-based architecture enhances scalability, maintainability, and overall system flexibility.


# Prerequisites
 Make sure you have Node.js, Docker, Skaffold, kubectl, and Ingress-Nginx installed. 
 Make sure you have Node.js, Docker, Skaffold, kubectl, and Ingress-Nginx installed. 

## Setting up Authentication Microservice
```
cd auth
npm install
sed -i 's|image: .*|image: {your_docker_id}/auth|' k8s/deployment.yaml
skaffold dev
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/cloud/deploy.yaml
npm run test
```

## If running locally
```
docker build -t YOURDOCKERID/auth .
docker push YOURDOCKERID/auth
```
## Setting up Client Microservice
```
cd client
docker build -t YOURDOCKERID/client .
docker push YOURDOCKERID/client
cd ..
skaffold dev
```
## Setting up Other Microservices
Repeat above steps for other microservices like /tickets and /nets-test.

## Running NATS Server
```
NATS_POD=$(kubectl get pods -l app=nats-depl -o jsonpath='{.items[0].metadata.name}')
kubectl port-forward $NATS_POD 4222:4222 &
kubectl port-forward $NATS_POD 8222:8222 &
```
## Run NATS Server commands
```
cd nets-test
npm run publish
npm run listen
npm run listen
```
