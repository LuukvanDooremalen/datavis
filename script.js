        let scale = window.innerWidth/1920;
        
        let percentageHeerlen = 50;
        let percentageSittard = 30;
        let percentageMaastricht = 10;

        //breedtes/hoogtes
        let widthAarde = 400 * scale;
        let heightAarde = widthAarde;
        let widthTruck = 100 * scale;
        let heightTruck = widthTruck/2;
        let widthSchool = 130 * scale;
        let heightSchool = widthSchool/2;
        let widthFlag = 70 * scale;
        let heightFlag = widthFlag * 1.5;
        let widthWaste = 130 * scale;
        let heightWaste = widthWaste/2;

        //hoeken
        let angleBlueTruck = ((360-90)*(percentageSittard/100)) - 45;
        let angleOrangeTruck = ((360-90)*(percentageHeerlen/100)) - 45;
        let angleGreenTruck = ((360-90)*(percentageMaastricht/100)) - 45;

        let angleMMMTruck = 145;

        let angleSchool = (360-45);
        let angleWaste = 360-90-45;
        let angleFlag = (360-90)* 0.4 - 45;

            const svgContainer = d3.select("#svg-container")
            .append("svg")
            .attr("width", window.innerWidth)  
            .attr("height", window.innerHeight);  

        // Aarde
        svgContainer.append("image")
            .attr("xlink:href", "assets/aarde.svg")  
            .attr("x", (window.innerWidth - widthAarde) /2)  
            .attr("y", (window.innerHeight - heightAarde) /2)
            .attr("width", widthAarde) 
            .attr("height", heightAarde);
            
        // school
        svgContainer.append("image")
            .attr("xlink:href", "assets/school.svg")  
            .attr("x", (window.innerWidth - widthSchool) /2)
            .attr("y", (window.innerHeight - heightSchool) /2 - (heightAarde/2) - (heightSchool/2) + (13*scale))
            .attr("transform", `rotate(${angleSchool}, ${window.innerWidth / 2}, ${window.innerHeight / 2})`)
            .attr("width", widthSchool)  
            .attr("height", heightSchool);

        // waste
        svgContainer.append("image")
            .attr("xlink:href", "assets/waste.svg")  
            .attr("x", (window.innerWidth - widthWaste) /2)
            .attr("y", (window.innerHeight - heightWaste) /2 - (heightAarde/2) - (heightWaste/2) + (10*scale))
            .attr("transform", `rotate(${angleWaste}, ${window.innerWidth / 2}, ${window.innerHeight / 2})`)
            .attr("width", widthWaste)  
            .attr("height", heightWaste);

        // flag
        svgContainer.append("image")
            .attr("xlink:href", "assets/flag.svg")  
            .attr("x", (window.innerWidth - widthFlag) /2)
            .attr("y", (window.innerHeight - heightFlag) /2 - (heightAarde/2) - (heightFlag/2) + (10*scale))
            .attr("transform", `rotate(${angleFlag}, ${window.innerWidth / 2}, ${window.innerHeight / 2})`)
            .attr("width", widthFlag)
            .attr("height", heightFlag);



// Orange Truck
const orangeTruckGroup = svgContainer.append("g")
.attr("transform", `rotate(${angleOrangeTruck}, ${window.innerWidth / 2}, ${window.innerHeight / 2})`);

orangeTruckGroup.append("image")
.attr("xlink:href", "assets/truckoranje.svg")
.attr("x", (window.innerWidth - widthTruck) / 2)
.attr("y", (window.innerHeight - heightTruck) / 2 - (heightAarde / 2) - (heightTruck / 2) + (5*scale))
.attr("width", widthTruck)
.attr("height", heightTruck)
.attr("class", "truck1");

// Green Truck
const greenTruckGroup = svgContainer.append("g")
.attr("transform", `rotate(${angleGreenTruck}, ${window.innerWidth / 2}, ${window.innerHeight / 2})`);

greenTruckGroup.append("image")
.attr("xlink:href", "assets/truckgroen.svg")
.attr("x", (window.innerWidth - widthTruck) / 2)
.attr("y", (window.innerHeight - heightTruck) / 2 - (heightAarde / 2) - (heightTruck / 2) + (5*scale))
.attr("width", widthTruck)
.attr("height", heightTruck)
.attr("class", "truck2");

// Blue Truck
const blueTruckGroup = svgContainer.append("g")
.attr("transform", `rotate(${angleBlueTruck}, ${window.innerWidth / 2}, ${window.innerHeight / 2})`);

blueTruckGroup.append("image")
.attr("xlink:href", "assets/truckblauw.svg")
.attr("x", (window.innerWidth - widthTruck) / 2)
.attr("y", (window.innerHeight - heightTruck) / 2 - (heightAarde / 2) - (heightTruck / 2) + (5*scale))
.attr("width", widthTruck)
.attr("height", heightTruck)
.attr("class", "truck3");

// MMM
const mmmTruckGroup = svgContainer.append("g")
    .attr("transform", `rotate(${angleMMMTruck}, ${window.innerWidth / 2}, ${window.innerHeight / 2})`);

mmmTruckGroup.append("image")
    .attr("xlink:href", "assets/MMM.png") 
    .attr("x", (window.innerWidth - widthTruck) / 2)
    .attr("y", (window.innerHeight - heightTruck) / 2 - (heightAarde / 2) - (heightTruck / 2) + (5*scale))
    .attr("width", widthTruck*1.2)
    .attr("height", heightTruck*1.2)
    .attr("class", "truck4");