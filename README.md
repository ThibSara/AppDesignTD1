Code Review:

For my initial project assignment, I opted to work on the watch template, choosing React Native as my development since I used it before for small projects.

Components Breakdown:

    card.js: This file serves as the card product component. It's designed to create all the watch cards, accepting various arguments such as title, serial number, price, image source, and color. This modularity enhances the flexibility of creating diverse watch cards.

    data.js: This is a constant file encompassing all the data for the watches. Centralizing the data in a separate file helps maintain clean and organized code.

    HomePage.js: The home page's code is contained in this file. I efficiently loaded specific fonts using {useFonts} from 'expo-font'. The data.js file is passed into card.js to instantiate the watch components on the homepage. Clicking on a specific watch card seamlessly navigates to the corresponding watch page.

    WatchPage.js: This file represents the product page, taking in essential arguments like title, serial number, price, and image source. It features a convenient arrow for users to navigate back to the homepage.

App Navigation:

    App.js: This file is responsible for displaying the homepage upon opening the app. The navigation aspect is thoughtfully implemented using { createNativeStackNavigator } from '@react-navigation/native-stack', enhancing the user experience by allowing smooth navigation between different sections of the application.
