# Little Lemon Home and Reservations
Capstone project for Meta Front-End specialization: home page and reservations page for a restaurant (Little Lemon) in which the user can know about the restaurant and reserve a table with some options

## UI
For Figma files, see [/figma](/figma)

## Pages
1. Home page containing a hero section about the restaurant in addition to special items in the menu
![Home](https://github.com/user-attachments/assets/1b9f50c1-a026-4da3-bc87-b81d6bc3fe2d)

2. About page containing some information about the restaurant and some testimonials
![About](https://github.com/user-attachments/assets/2087455a-abd2-4a4b-8fef-0fb1f841f55a)

3. Reservations page containing a form to reserve a table
![Reservations](https://github.com/user-attachments/assets/bed63c77-b970-44f8-8284-65a2f1f02ae4)

## Technical Highlights
* Design is fairly responsive across all devices
* HTML semantic and OG tags are used and accessibility guidelines are followed
* Reservations form is a controlled form, made with `Chakra UI` and validated with `Formik` and `Yup`
* When reservation day is updated, the available time to reserve is updated as well dynamically
* `React Routing` is used to navigate between screens
* Different styling methods are applied (using separate CSS / using inline styling / using style objects)
* Few CSS effects are added as well
* Couple of unit tests are added as well

## Additional Features (not yet implemented)
* Menu page
* Order page with mechanism to send an HTTP request to a restaurant API with the user order
* History of orders for the user

## Steps
```
git clone https://github.com/3omdawy/little-lemon-app.git
cd little-lemon-app
npm install
npm start
```
