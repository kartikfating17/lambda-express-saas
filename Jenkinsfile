pipeline {
    agent any

    environment {
        // AWS credentials if needed
        AWS_ACCESS_KEY_ID = credentials('AWS_ACCESS_KEY_ID')
        AWS_SECRET_ACCESS_KEY = credentials('AWS_SECRET_ACCESS_KEY')
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/kartikfating17/lambda-express-saas.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Serverless Deploy') {
            steps {
                withCredentials([string(credentialsId: 'SERVERLESS_KEY', variable: 'SERVERLESS_ACCESS_KEY')]) {
                    // Pass the Serverless key as environment variable
                    withEnv(["SERVERLESS_ACCESS_KEY=${env.SERVERLESS_ACCESS_KEY}"]) {
                        bat 'npx serverless deploy --stage prod'
                    }
                }
            }
        }
    }

    post {
        failure {
            echo 'Deployment failed! Check logs.'
        }
    }
}
