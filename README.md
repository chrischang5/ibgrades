# IB Grades React App

This project provides a way for IB students to view and visualize historical International Baccalaureate (IB) grade distributions. Currently, it's a proof of concept with data only available for May 2019 and May 2018.

This project was built using React, HTML, Bootstrap CSS, Chart.js, Node.js, Express, MongoDB, Excel, and Python.

# Key Features

## Responsive Graphs
The website uses `chartjs-react-2` to create dynamic and responsive charts to display the grades data

![image](https://user-images.githubusercontent.com/64388914/148728441-f9bc9505-3e5f-4706-bbb7-bc3bd0715815.png)

## Cascading Dropdowns
Dropdowns dynamically populate based on previous selections in the search bar.

Example: Level dropdown with two fields when `2019 May Physics` is selected. 

![image](https://user-images.githubusercontent.com/64388914/148728547-f211507b-01a2-408a-87a0-0dc2884c2da9.png)

Example: Level dropdown populated with one field when `2019 May Food Sci. Tech` is selected.

![image](https://user-images.githubusercontent.com/64388914/148728617-8d6608a1-965b-4339-abae-8d5dc2c607ae.png)

# Data Sources
The grade distribution data comes directly from the May and November releases of the Diploma Programme (DP) Statistical Bulletins. These bulletins can be found on [IBO's DP statistical bulletin page](https://www.ibo.org/about-the-ib/facts-and-figures/statistical-bulletins/diploma-programme-statistical-bulletin/).
A repository containing the PDFs and CSV versions will also be available soon.


This project is in no way affiliated with IBO or the IB Programme.
