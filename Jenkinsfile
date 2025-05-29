pipeline {
    agent {
        docker {
            image 'node:18-alpine'
        }
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/tu-usuario/tu-repo.git' // actualiza esta línea
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run tests') {
            steps {
                // si no tienes tests, simula uno
                sh 'echo "Running tests..."'
            }
        }

        stage('Build Docker image') {
            steps {
                sh 'docker build -t 02entregacontinua .'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker stop entrega || true'
                sh 'docker rm entrega || true'
                sh 'docker run -d -p 3000:3000 --name entrega 02entregacontinua'
            }
        }
    }
}
