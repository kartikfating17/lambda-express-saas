

pipeline {
    agent any

    environment {
        AWS_ACCESS_KEY_ID     = credentials('aws-access-key-id')   // Jenkins stored credentials
        AWS_SECRET_ACCESS_KEY = credentials('aws-secret-access-key')
        NODE_ENV              = 'production'
    }

    stages {
        stage('Checkout') {
            steps {
                echo "Checking out code from Git"
                git branch: 'main', url: 'https://github.com/kartikfating17/lambda-express-saas.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "Installing Node.js dependencies"
                sh 'npm ci'
            }
        }

        stage('Serverless Deploy') {
            steps {
                echo "Deploying to AWS Lambda via Serverless"
                sh 'npx serverless deploy --stage prod'
            }
        }
    }

    post {
        success {
            echo "✅ Deployment successful!"
        }
        failure {
            echo "❌ Deployment failed! Check logs."
        }
    }
}
