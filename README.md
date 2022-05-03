# HelloBetter Dynamic Form  


## Project Name & Pitch
 - Dynamic form with configured json
 - An application used for Hellobetter case study
 - Language : JavaScript
 - Main UI Library : React
 - Web Framework : Express(NodeJs)

## packages

- express -> web framework
- body-parser -> for parsing request body to Json
- cors -> for making apis accessible from other origins
- concurrently -> to able to run both UI and server together

 - react -> UI js library
 -  style-component -> to write css base style component 
 - jest -> write test 

## Project Technologies

- React version '18.0.0'
- React hook
- Style-Component
- Node version '14.17.0'
- Jest

## 

## Installation and Setup Instructions

- Clone down this repository. You will need `node` and `npm` installed globally on your machine.

- Installation:`npm install`
- run project: `npm run dev`
- To Run Test Suite: `npm test`
- To Visit App:`http://localhost:3000`

or

- you can use docker and see result.
  - Clone the repo
  - Go to docker directory -> `cd docker`
  - In terminal -> `docker-compose up` OR `docker-compose up -d`
  - After docker build completed, you can access the web app at port 3001 -> `http://localhost:3001`

  ## useful Hints

  - All the environment variables are in .env file in the root directory.
  

## Project Functionalities - user story
 - user should able to see signup form 
 - user should able to fill information according json
 - user should see validation error for each information field after click outside of field 
 - user can only choose valid email with this format 'abc@abc.com
 - user should choose password with at least 8 characters, one number , one alphabet char
 - user can show and hide Password
 - user should accept term and conditions 
 - onSubmit of form if form is onvalid user should see red border on whole box and validation error 

## The react pattern which I used
- Custom hook pattern
- Props getter pattern

## How I design the project
- Whole project is in theme provider wapper and all of css should read from there
- Application has 3 main part which is defined aslayer (header - body - footer)
- Forms render in body part 
- Form components: 
    - signupform 
        - FormElements
            - textInput ,etc.   
                - Input 
                - error Message component


## test

some unit test by jest.


## How commit the code to
Semantic Commit Messages
https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716