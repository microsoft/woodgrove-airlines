# Woodgrove airlines demo

## Setup Azure-Front door

Add a new rule with the following settings:

- Rule name: **CorsLocal**
    - Condition: if **Request header** begins with `https://localhost:44418` 
    - Action (response header): **Append** the **Access-Control-Allow-Origin** header with value of `https://localhost:44418` 

- Rule name: **CorsLive**
    - Condition: if **Request header** begins with `https://airlines.woodgrovedemo.com` 
    - Action (response header): **Append** the **Access-Control-Allow-Origin** header with value of `https://airlines.woodgrovedemo.com` 
