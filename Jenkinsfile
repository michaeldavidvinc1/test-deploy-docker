pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "michaeldavidvinc/node-app"
        KUBE_DEPLOYMENT = "node-app"
        KUBE_NAMESPACE = "default"
    }

    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/USERNAME/REPO.git'
            }
        }

        stage('Build & Push Docker Image') {
            steps {
                script {
                    sh "docker build -t $DOCKER_IMAGE:latest ."
                    sh "docker login -u YOUR_DOCKERHUB_USERNAME -p YOUR_DOCKERHUB_PASSWORD"
                    sh "docker push $DOCKER_IMAGE:latest"
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                script {
                    sh "kubectl set image deployment/$KUBE_DEPLOYMENT $KUBE_DEPLOYMENT=$DOCKER_IMAGE:latest -n $KUBE_NAMESPACE"
                }
            }
        }
    }
}
