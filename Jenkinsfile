pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'docker build -t mywebsite .'
            }
        }
        stage('Deploy') {
            steps {
                sh 'kubectl apply -f deployment.yaml'
            }
        }
    }
}
