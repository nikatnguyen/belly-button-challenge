// Use the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.
let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

d3.json(url).then(function(data) {
    console.log(data);
  });

//Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

function topTen(data) {
    // return player.madeTeam == true;
    // A more concise way to express a boolean conditional
    return player.madeTeam;
  }

function init() {
    let data = [{
      values: australia,
      labels: labels,
      type: "bar"
    }];
  
    let layout = {
      height: 600,
      width: 800
    };
  
    Plotly.newPlot("bar", data, layout);
  }
function getData() {
    let dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a letiable
    let dataset = dropdownMenu.property("value");
    // Initialize an empty array for the country's data
    let data = [];
  
    if (dataset == 'australia') {
        data = australia;
    }
    else if (dataset == 'brazil') {
        data = brazil;
    }
    else if (dataset == 'uk') {
        data = uk;
    }
    else if (dataset == 'mexico') {
      data = mexico;
    }
    else if (dataset == 'singapore') {
        data = singapore;
    }
    else if (dataset == 'southAfrica') {
      data = southAfrica;
    }

////Use sample_values as the values for the bar chart.

////Use otu_ids as the labels for the bar chart.

////Use otu_labels as the hovertext for the chart.


//Create a bubble chart that displays each sample.

////Use otu_ids for the x values.

////Use sample_values for the y values.

////Use sample_values for the marker size.

////Use otu_ids for the marker colors.

////Use otu_labels for the text values


//Display the sample metadata, i.e., an individual's demographic information.

//Display each key-value pair from the metadata JSON object somewhere on the page.


//Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard.


Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file

