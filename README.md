Code Review:

In my initial project assignment, I chose to focus on the development of the watch template, leveraging React Native due to my prior experience with the framework in smaller projects.

Components Breakdown:

    card.js: This component serves as the foundation for the watch product cards. It is designed with modularity in mind, accepting various arguments such as title, serial number, price, image source, and color. This modularity enhances code flexibility, allowing for the creation of diverse watch cards.

    data.js: This constant file consolidates all the data related to the watches. By centralizing the data in a separate file, the code remains clean, well-organized, and easy to maintain.

    HomePage.js: The code for the home page is encapsulated in this file. It incorporates the {useFonts} from 'expo-font' to load specific fonts. The data.js file is utilized in card.js to instantiate the watch components on the homepage. Users can seamlessly navigate to the corresponding watch page by clicking on a specific watch card.

    WatchPage.js: This file represents the product page and takes in essential arguments such as title, serial number, price, and image source. The page features a convenient arrow for users to navigate back to the homepage, ensuring a smooth and intuitive user experience.

App Navigation:

    App.js: This file is responsible for displaying the homepage upon opening the app. The navigation aspect is implemented using {createNativeStackNavigator} from '@react-navigation/native-stack', enhancing the user experience by enabling smooth navigation between different sections of the application.

Bonus:

I implemented the watch page and established  navigation between my pages, contributing to the overall functionality and user interactivity of the application.