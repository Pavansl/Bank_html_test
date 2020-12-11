node
    {
        stage('Check Out')
        {
          
            checkout([$class: 'GitSCM', branches: [[name: '*/main']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/Pavansl/Bank_html_test.git']]])
               echo "current build number: ${currentBuild.number}"
            echo "previous build number: ${currentBuild.previousBuild.getNumber()}"
        }
        stage('Install npm')
        {
           bat '''npm install'''
        }
        stage('Build the main code')
        {
           bat '''cd src
           node Bank.js'''
        }
        stage('Install Jasmine Node')
        {
           bat '''npm install jasmine-node'''
        }
        stage('Build the Test code')
        {
           bat '''npx jasmine init'''
           bat '''npx jasmine Test.js'''
        }
      stage('HTML Report')
        {
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: '', reportFiles: 'SpecRunner.html', reportName: 'HTML Report', reportTitles: ''])
        }
        stage('Mail Notify')
        {
            emailext body: 'Check Out, Build the Test Code, HTML Report is finished', subject: 'Status', to: 'pavan.sl@ltts.com'
        }
    }
