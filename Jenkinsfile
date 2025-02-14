pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/michaeldavidvinc1/test-deploy-docker.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t my-app .'
            }
        }
        stage('Push ke Docker Registry') {
            steps {
                sh 'docker tag my-app my-registry.com/my-app'
                sh 'docker push my-registry.com/my-app'
            }
        }
        stage('Deploy ke Kubernetes') {
            steps {
                sh 'kubectl apply -f k8s/deployment.yaml'
            }
        }
    }
}
