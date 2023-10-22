# Blog using Microservices with Node JS and React

# start
/auth
npm install

change
    - image: {your docker id}/auth

skaffold dev

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/cloud/deploy.yaml