#!groovy

@Library("workflowlibs@master") _

pipeline {

    agent any

    parameters {
        file(description: 'Ether Configuration', name: 'etherConfig')
        string(name: 'etherConfigId', defaultValue: '', description: 'Ether Configuration')
    }  

    stages {

        stage('Checkout Global Library') {

            steps {

                script{

                    globalBootstrap {

                        libraryName   = "cellsworkflowlibs"
                        libraryBranch = "master"

                        entrypointParams = [
                            type            : "cellsApp",
                            buildConfigs    : [config1:[config:'dev', build:'novulcanize']],
                            deployS3        : true
                        ]
                    }
                }
            }
        }
    }
}
