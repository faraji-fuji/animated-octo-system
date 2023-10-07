# animated-octo-system

# Mobile Web-Based Application Development
## Requirements:
### To create a Mobile Web Site for Bike Sharing in Toronto.

- The site contains two pages – the **Main** and the **Bike Share**.
- A header (grid-area) and a footer (grid-area) are to be included on both pages.
     - The header displays an h2 "Bike Share" and includes Assignment #2 / Your
Name / Your Student Number on the next line.
    - The footer includes Your Login Name / Your Campus.
    - Create a JSON file that contains your profile data (name, student number, login
name, and campus). Retrieve the data using AJAX and use in the header and
footer.
- Format the site for both landscape and portrait views.
- Proper labeling, formatting for mobile layout, etc. will be considered in grading.
- Use **ES6/7 features**.
- Use **CSS Grid for layout**.

#### Main Page (index.html):
- Download bikeshare.json from SLATE and include it in a sub-folder of your
assignment folder.
- The Main Page contains header, content, and footer areas (see above for the
header and footer areas).
- Add a navigation bar to the header of this page that has two buttons:
    - A button will do the following:
        - Retrieve the data from bikeshare.json using JavaScript Fetch API.
        - Create a **CLASS** with a **Constructor** to create new bikeShare objects using
the objects from bikeshare.json and save them to localStorage (see page 18
of ES6 from Week 2).
        - The **CLASS** will contain the following properties from the object in
bikeshare.json plus one more - "stdId" and the value is your student id.
            - id 
            - stationName 
            - availableDocks 
            - availableBikes 
            - statusValue
            - city
        - Use the value of the "id" property as key when saving new bikeshare
objects to localStorage.
        - Display a message to the browser after all the bikeShare objects are saved
to localStorage.
    - A button to link to the Bike Share Page.
- The content area contains:
    - Your view on bike sharing and how it can help improving air pollution in
urban cities (you can source from the internet but make sure citations are
included).

#### Bike Share Page:

- The Bike Share Page contains header, content, and footer areas (see above for the
header and footer areas).
- The content area contains:
        - Two container elements that will stack up on top of each other in portrait
view; and side by side in landscape view.
    - The first container contains a listing of:
        - All the ids and stationNames retrieved from localStorage.
        - When an item is selected from the list with a click event the details of
the selected item will be displayed in the second container element.
    - The second container displays the details of the station selected from the
first container.
- Includes a button to go back to the Main Page.



### Other Requirements:
- Folder setup:
    - The index.html should be the only file in the assignment folder.
    - All other files should be in sub-folders, for example:
        - **css** sub-folder to include all CSS files
        - **images** sub-folder to include all images
        - **pages** sub-folder to include all HTML files other than the index.html
        - **js** sub-folder to include all JavaScript files
- Be sure to include the viewport setting in the html files.
