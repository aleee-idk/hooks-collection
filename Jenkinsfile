pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }

    stage('build') {
      steps {
        sh 'npm build'
      }
    }

  }
}