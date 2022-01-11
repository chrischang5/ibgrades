# IB Grades React Website

This project provides a way for IB students to view and visualize historical International Baccalaureate (IB) grade distributions. Currently, it's a proof of concept with data only available for May 2019 and May 2018. But, I hope to expand on it and add [these features](https://github.com/chrischang5/ibgrades#future-features) in the future.

This project was built using React, HTML, Bootstrap CSS, Chart.js, Node.js, Express, MongoDB, Excel, and Python.

# Key Features

## Responsive Graphs
The website uses `chartjs-react-2` to create dynamic and responsive charts to display the grades data

![image](https://user-images.githubusercontent.com/64388914/148728441-f9bc9505-3e5f-4706-bbb7-bc3bd0715815.png)

## Cascading Dropdowns
Dropdowns dynamically populate based on previous selections in the search bar and based on what is readily available in the database.

Example: Currently only May 2018 and May 2019 data is available and this is reflected in the dropdown

![image](https://user-images.githubusercontent.com/64388914/149018872-e6cfde4e-01a9-4f0a-a0ed-eadad0f43962.png)

Example: Level dropdown with two fields when `2019 May Physics` is selected. 

![image](https://user-images.githubusercontent.com/64388914/148728547-f211507b-01a2-408a-87a0-0dc2884c2da9.png)

Example: Level dropdown populated with one field when `2019 May Food Sci. Tech` is selected.

![image](https://user-images.githubusercontent.com/64388914/148728617-8d6608a1-965b-4339-abae-8d5dc2c607ae.png)

# Data Sources
The grade distribution data comes directly from the May and November releases of the Diploma Programme (DP) Statistical Bulletins. These bulletins can be found on [IBO's DP statistical bulletin page](https://www.ibo.org/about-the-ib/facts-and-figures/statistical-bulletins/diploma-programme-statistical-bulletin/).
A repository containing the PDFs and CSV formats of the data is available [on my GitHub](https://github.com/chrischang5/ibgrades-data).

# Future Features
On top of automating the gathering and parsing of more grades data, I hope to include some statistical analyses of each grade distributions so I can explore the field of data science and statistics. I also hope to add a way to view historical trends of classes. A final feature would be to create more visuals for other data found in the DP Statistical Bulletins and encorporate them into the website.

This project is in no way affiliated with IBO or the IB Programme.
