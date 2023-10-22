# Blog using Microservices with Node JS and React

# start
/auth
npm install

change
    - image: {your docker id}/auth

skaffold dev

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/cloud/deploy.yaml

/auth
npm run test

Step to do only if you are running Docker/Kubernetes on your local machine (if you are using Google Cloud then skip this)

Change into the client directory at your terminal

Run docker build -t YOURDOCKERID/client .

Run docker push YOURDOCKERID/client

Change back to the root project directory.

Run skaffold dev