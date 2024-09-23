# Woodgrove airlines demo

This application is currently in the experimental phase and may contain bugs, incomplete features, or unexpected behavior. Use at your own risk. Microsoft is not responsible for any data loss, security issues, or other problems that may arise from using this application. It is recommended to back up your data and use this application in a controlled environment.

## Setup Azure-Front door

Add a new rule with the following settings:

- Rule name: **CorsLocal**
    - Condition: if **Request header** begins with `https://localhost:44418` 
    - Action (response header): **Append** the **Access-Control-Allow-Origin** header with value of `https://localhost:44418` 

- Rule name: **CorsLive**
    - Condition: if **Request header** begins with `https://airlines.woodgrovedemo.com` 
    - Action (response header): **Append** the **Access-Control-Allow-Origin** header with value of `https://airlines.woodgrovedemo.com` 
 
 