pipeline {
  agent any
  stages {
    stage('Fetch Code') {
      steps {
        git(url: 'https://github.com/aleee-idk/hooks-collection', branch: 'main')
      }
    }

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