// Assignment no 1

// Q1 
// let exp = "faraz" || (true + false) + 5 && " " || "true";

// "faraz" || 1 + 5 && " " || "true";

// "faraz" || 6 && " " || "true";

// "faraz" || (6 && " ") || "true";

// "faraz" || " " || "true";

// "faraz" || "true";

// Q2
// let exp1 = (1 + 2) + ++b || 5 && 0 ; 

// 3 + 4  || 5 && 0 ;

// 7 || 0;

// 7;

// Q3
// let exp2 = 32 && true - ++a && " " || "true";

// 1 - 6 && " " || "true";

// 5 && " "  || "true" ;

// " " || "true";

// " ";

//Q4
// let exp3 = (true + 3) * 5 && undefined || "faraz" + 5;

// 4 * 5 && undefined || "faraz" + 5;

// 20 && undefined || "faraz" + 5;

// 20 && undefined || "faraz5";

// 20;

// Q5 
// let exp4 = 32 + "abc" || (true + false) + false || + 5 || "true";

// "32abc" || (true + false) + false || + 5 || "true";

// "32abc" || 1 + 0 + 0 || + 5 || "true";

// "32abc" || 1 || + 5 || "true";

// "32abc" || 1 ||  5 || "true";

// "32abc" || "true";

// "32abc";

// Q6

// let exp5 = false || (true + true) + 15 && "" || 50;

// false || ( 1 + 1 ) + 15  && "" || 50;

// false || 17  && "" || 50;

// false || "" || 50;

// 50;

// Q7
// let exp6 = (true + false) + 5 || false + 8 + "abc" || "true";

// ( 1 + 0 ) + 5 || false + 8 + "abc" || "true";

// 6 || false + 8 + "abc" || "true";

// 6 || "8abc" || "true";

// 6;

// Q8
// let exp7 = "faraz" || false + 10 || "true";

// "faraz" || 0 + 10 || "true";

// "faraz" || 10 || "true";

// "faraz" ;

// Q9
// let exp8 = 12 + (false + false) + true && null || "faraz";

// 12 + (0 + 0 ) + 1  && null || "faraz";

// 13 && null || "faraz";

// null  || "faraz";

// "faraz";

// Q10
// let exp9 = (false + true + false + 2) || "faraz" && false || 1 + 10;

// 0 + 1 + 0 + 2 || "faraz" && false || 1 + 10;

// 3 || "faraz" && false || 1 + 10;

// 3 || "faraz" && false || 11;

// 3 || false || 11;

// 3;

//Q11
// let exp10 = (true + false) + 5 || false + 8 + "abc" || "true";

// (1 + 0) + 5 || 0 + 8 + "abc" || "true";

// 6 || "8abc" || "true"

// 6;

// Q12
// let exp11 = (true + false) * 3 && "" || false + true - (12 + true + true + false);

// (1 + 0) * 3 && "" || 0 + 1 - (12 + 1 + 1 + 0);

// 3 && "" || 1 - 14

// "" || -13

// -13;


//Assignment  02


    // Accessing the mobile data
    const mobilesData = {
        
        iphone: {
          iphone7: {
            processor: "Snapdragon 8 Gen 2",
            memory: {
              ram: 12,
              storage: 512,
            },
            camera: {
              rear: {
                main: 200,
                ultrawide: 12,
                telephoto: 10,
                telephotoPeriscope: 10,
              },
              front: 10,
            },
            battery: 5000,
            operatingSystem: "Android 13",
            specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
          },
          iphone8: {
            processor: "Snapdragon 12 Gen 5",
            memory: {
              ram: 8,
              storage: 256,
            },
            camera: {
              rear: {
                main: 180,
                ultrawide: 15,
                telephoto: 10,
                telephotoPeriscope: 20,
              },
              front: 12,
            },
            battery: 8000,
            operatingSystem: "iphone 8",
            specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
          },
          iphone8plus: {
            processor: "Snapdragon 5 Gen 6",
            memory: {
              ram: 8,
              storage: 128,
            },
            camera: {
              rear: {
                main: 160,
                ultrawide: 18,
                telephoto: 10,
                telephotoPeriscope: 8,
              },
              front: 16,
            },
            battery: 5000,
            operatingSystem: "iphone 8",
            specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
          },
          iphoneX: {
            processor: "Snapdragon 5 Gen 4",
            memory: {
              ram: 8,
              storage: 256,
            },
            camera: {
              rear: {
                main: 130,
                ultrawide: 16,
                telephoto: 10,
                telephotoPeriscope: 18,
              },
              front: 14,
            },
            battery: 6000,
            operatingSystem: "iphone X",
            specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
          },
          iphone11: {
            processor: "Snapdragon 7 Gen 9",
            memory: {
              ram: 16,
              storage: 512,
            },
            camera: {
              rear: {
                main: 150,
                ultrawide: 24,
                telephoto: 16,
                telephotoPeriscope: 10,
              },
              front: 20,
            },
            battery: 10000,
            operatingSystem: "iphone 11",
            specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
          },
        },
        xiomi: {
          redmiA2: {
            modelName: "Mi 12 Pro",
            display: {
              size: 6.73,
              resolution: "3200 x 1440",
              panelType: "AMOLED",
              refreshRate: 120,
            },
            processor: "Snapdragon 8 Gen 1",
            memory: {
              ram: 8,
              storage: 256,
            },
            camera: {
              rear: {
                main: "50MP",
                ultrawide: "50MP",
                telephoto: "48MP",
              },
              front: "32MP",
            },
            battery: 4600,
            operatingSystem: "Android 12",
            specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
          },
          redmi10: {
            modelName: "Mi 8 Pro",
            display: {
              size: 5.73,
              resolution: "3000 x 1320",
              panelType: "AMOLED",
              refreshRate: 100,
            },
            processor: "Snapdragon 7 Gen 5",
            memory: {
              ram: 12,
              storage: 256,
            },
            camera: {
              rear: {
                main: "50MP",
                ultrawide: "50MP",
                telephoto: "48MP",
              },
              front: "32MP",
            },
            battery: 5000,
            operatingSystem: "Android 11",
            specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
          },
      
          redmi11: {
            modelName: "Mi 14 Pro",
            display: {
              size: 6.0,
              resolution: "3000 x 1240",
              panelType: "AMOLED",
              refreshRate: 150,
            },
            processor: "Snapdragon 8 Gen 4",
            memory: {
              ram: 12,
              storage: 512,
            },
            camera: {
              rear: {
                main: "50MP",
                ultrawide: "50MP",
                telephoto: "48MP",
              },
              front: "32MP",
            },
            battery: 8000,
            operatingSystem: "Android 12",
            specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
          },
      
          redmi12: {
            modelName: "Mi 12 Pro",
            display: {
              size: 7.4,
              resolution: "3200 x 1440",
              panelType: "AMOLED",
              refreshRate: 180,
            },
            processor: "Snapdragon 12 Gen 1",
            memory: {
              ram: 12,
              storage: 512,
            },
            camera: {
              rear: {
                main: "50MP",
                ultrawide: "50MP",
                telephoto: "48MP",
              },
              front: "32MP",
            },
            battery: 8000,
            operatingSystem: "Android 13",
            specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
          },
      
          redmi13: {
            modelName: "Mi 14 Pro",
            display: {
              size: 8.03,
              resolution: "4200 x 1540",
              panelType: "AMOLED",
              refreshRate: 100,
            },
            processor: "Snapdragon 8 Gen 6",
            memory: {
              ram: 12,
              storage: 256,
            },
            camera: {
              rear: {
                main: "50MP",
                ultrawide: "50MP",
                telephoto: "48MP",
              },
              front: "32MP",
            },
            battery: 10000,
            operatingSystem: "Android 13",
            specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
          },
      
          redmi13C: {
            modelName: "Mi 14 Pro",
            display: {
              size: 8.43,
              resolution: "4200 x 1340",
              panelType: "AMOLED",
              refreshRate: 100,
            },
            processor: "Snapdragon 9 Gen 5",
            memory: {
              ram: 12,
              storage: 512,
            },
            camera: {
              rear: {
                main: "50MP",
                ultrawide: "50MP",
                telephoto: "48MP",
              },
              front: "32MP",
            },
            battery: 10000,
            operatingSystem: "Android 13",
            specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
          },
        },
        realme: {
          realmiNote50: {
            brand: "Realme",
            model: " hypothetical model ", // Replace with specific model name
            display: {
              size: "6.5 inches",
              resolution: "FHD+ (1080 x 2400 pixels)",
              type: "AMOLED",
            },
            processor: "Qualcomm Snapdragon 8 Gen 1", // Replace with specific processor
            memory: {
              ram: "8GB",
              storage: "128GB",
            },
            camera: {
              rear: {
                resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
              },
              front: {
                resolution: "16MP",
              },
            },
            battery: {
              capacity: "5000mAh",
              fastCharging: "65W",
            },
            operatingSystem: "Android 12",
            specialFeatures: [
              "In-display fingerprint sensor",
              "3.5mm headphone jack",
            ],
          },
          realmiC67: {
            brand: "Realme",
            model: " hypothetical model ", // Replace with specific model name
            display: {
              size: "6.7 inches",
              resolution: "FHD+ (1280 x 2100 pixels)",
              type: "AMOLED",
            },
            processor: "Qualcomm Snapdragon 6 Gen 4", // Replace with specific processor
            memory: {
              ram: "8GB",
              storage: "256GB",
            },
            camera: {
              rear: {
                resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
              },
              front: {
                resolution: "14MP",
              },
            },
            battery: {
              capacity: "5000mAh",
              fastCharging: "65W",
            },
            operatingSystem: "Android 11",
            specialFeatures: [
              "In-display fingerprint sensor",
              "3.5mm headphone jack",
            ],
          },
          realmiC53: {
            brand: "Realme",
            model: " hypothetical model ", // Replace with specific model name
            display: {
              size: "7. 1inches",
              resolution: "FHD+ (1180 x 2500 pixels)",
              type: "AMOLED",
            },
            processor: "Qualcomm Snapdragon 8 Gen 6", // Replace with specific processor
            memory: {
              ram: "12GB",
              storage: "128GB",
            },
            camera: {
              rear: {
                resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
              },
              front: {
                resolution: "18MP",
              },
            },
            battery: {
              capacity: "8000mAh",
              fastCharging: "65W",
            },
            operatingSystem: "Android 12",
            specialFeatures: [
              "In-display fingerprint sensor",
              "3.5mm headphone jack",
            ],
          },
          realmi9: {
            brand: "Realme",
            model: " hypothetical model ", // Replace with specific model name
            display: {
              size: "7.2 inches",
              resolution: "FHD+ (1180 x 2200 pixels)",
              type: "AMOLED",
            },
            processor: "Qualcomm Snapdragon 9 Gen 6", // Replace with specific processor
            memory: {
              ram: "12GB",
              storage: "256GB",
            },
            camera: {
              rear: {
                resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
              },
              front: {
                resolution: "24MP",
              },
            },
            battery: {
              capacity: "10000mAh",
              fastCharging: "75W",
            },
            operatingSystem: "Android 12",
            specialFeatures: [
              "In-display fingerprint sensor",
              "3.5mm headphone jack",
            ],
          },
          realmi9i: {
            brand: "Realme",
            model: " hypothetical model ", // Replace with specific model name
            display: {
              size: "6.9 inches",
              resolution: "FHD+ (1480 x 2400 pixels)",
              type: "AMOLED",
            },
            processor: "Qualcomm Snapdragon 8 Gen 1", // Replace with specific processor
            memory: {
              ram: "12GB",
              storage: "512GB",
            },
            camera: {
              rear: {
                resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
              },
              front: {
                resolution: "16MP",
              },
            },
            battery: {
              capacity: "2000mAh",
              fastCharging: "70W",
            },
            operatingSystem: "Android 13",
            specialFeatures: [
              "In-display fingerprint sensor",
              "3.5mm headphone jack",
            ],
          },
        },
        samsung: {
          samsung_Galaxy_S24: {
            brand: "Samsung",
            model: "Galaxy S24 Ultra", // Replace with specific model
      
            // Display
            displaySize: 6.8, // Inches
            displayResolution: "3088x1440",
            displayType: "AMOLED",
      
            // Processor & Memory
            processor: "Snapdragon 8 Gen 2", // Replace with actual processor
            ram: 12, // GB
            storage: 512, // GB
      
            // Cameras
            rearCamera: {
              megapixel: 108,
              features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
            },
            frontCamera: {
              megapixel: 40,
            },
      
            // Battery
            batteryCapacity: 5000, // mAh
            fastCharging: "45W Super Fast Charging",
      
            // Operating System
            os: "Android 14",
      
            // Additional Specs (Optional)
            fingerprintSensor: true,
            waterResistance: "IP68",
            expandableStorage: false,
          },
          samsung_Galaxy_S51: {
            brand: "Samsung",
            model: "Galaxy S51 Pro", // Replace with specific model
      
            // Display
            displaySize: 7.2, // Inches
            displayResolution: "3088x1440",
            displayType: "AMOLED",
      
            // Processor & Memory
            processor: "Snapdragon 9 Gen 4", // Replace with actual processor
            ram: 8, // GB
            storage: 256, // GB
      
            // Cameras
            rearCamera: {
              megapixel: 112,
              features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
            },
            frontCamera: {
              megapixel: 40,
            },
      
            // Battery
            batteryCapacity: 8000, // mAh
            fastCharging: "45W Super Fast Charging",
      
            // Operating System
            os: "Android 11",
      
            // Additional Specs (Optional)
            fingerprintSensor: true,
            waterResistance: "IP68",
            expandableStorage: false,
          },
          samsung_Galaxy_Prime: {
            brand: "Samsung",
            model: "Galaxy Prime Ultra", // Replace with specific model
      
            // Display
            displaySize: 7.4, // Inches
            displayResolution: "3088x1440",
            displayType: "AMOLED",
      
            // Processor & Memory
            processor: "Snapdragon 8 Gen 10", // Replace with actual processor
            ram: 8, // GB
            storage: 256, // GB
      
            // Cameras
            rearCamera: {
              megapixel: 108,
              features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
            },
            frontCamera: {
              megapixel: 40,
            },
      
            // Battery
            batteryCapacity: 5000, // mAh
            fastCharging: "45W Super Fast Charging",
      
            // Operating System
            os: "Android 13",
      
            // Additional Specs (Optional)
            fingerprintSensor: true,
            waterResistance: "IP68",
            expandableStorage: false,
          },
          samsung_Galaxy_S46: {
            brand: "Samsung",
            model: "Galaxy S46 Ultra", // Replace with specific model
      
            // Display
            displaySize: 5.11, // Inches
            displayResolution: "3088x1440",
            displayType: "AMOLED",
      
            // Processor & Memory
            processor: "Snapdragon 8 Gen 2", // Replace with actual processor
            ram: 12, // GB
            storage: 512, // GB
      
            // Cameras
            rearCamera: {
              megapixel: 108,
              features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
            },
            frontCamera: {
              megapixel: 40,
            },
      
            // Battery
            batteryCapacity: 20000, // mAh
            fastCharging: "65W Super Fast Charging",
      
            // Operating System
            os: "Android 14",
      
            // Additional Specs (Optional)
            fingerprintSensor: true,
            waterResistance: "IP68",
            expandableStorage: false,
          },
          samsung_Galaxy_S77: {
            brand: "Samsung",
            model: "Galaxy S77 Ultra", // Replace with specific model
      
            // Display
            displaySize: 8.5, // Inches
            displayResolution: "3088x1440",
            displayType: "AMOLED",
      
            // Processor & Memory
            processor: "Snapdragon 12 Gen 24", // Replace with actual processor
            ram: 12, // GB
            storage: 512, // GB
      
            // Cameras
            rearCamera: {
              megapixel: 158,
              features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
            },
            frontCamera: {
              megapixel: 40,
            },
      
            // Battery
            batteryCapacity: 20000, // mAh
            fastCharging: "85W Super Fast Charging",
      
            // Operating System
            os: "Android 14",
      
            // Additional Specs (Optional)
            fingerprintSensor: true,
            waterResistance: "IP68",
            expandableStorage: true,
          },
        },
      };
      
          // Function to populate the brand dropdown
          function populateBrands() {
              const brands = Object.keys(mobilesData);
              const brandSelect = document.getElementById("brandSelect");
              brands.forEach((brand) => {
                  const option = document.createElement("option");
                  option.text = brand;
                  brandSelect.add(option);
              });
          }
      
          // Function to populate the model dropdown based on selected brand
          function populateModels() {
              const selectedBrand = document.getElementById("brandSelect").value;
              const modelSelect = document.getElementById("modelSelect");
              modelSelect.innerHTML = "<option value=''>Select Model</option>";
              if (selectedBrand !== "") {
                  const models = Object.keys(mobilesData[selectedBrand]);
                  models.forEach((model) => {
                      const option = document.createElement("option");
                      option.text = model;
                      modelSelect.add(option);
                  });
              }
          }
      
      
      
          // Function to filter and display the selected mobile brand and model
          function filterMobile() {
              const selectedBrand = document.getElementById("brandSelect").value;
              const selectedModel = document.getElementById("modelSelect").value;
              const resultDiv = document.getElementById("result");
              resultDiv.innerHTML = "";
              if (selectedBrand !== "" && selectedModel !== "") {
                  const mobileDetails = mobilesData[selectedBrand][selectedModel];
                  const details = JSON.stringify(mobileDetails, null, 2);
                  resultDiv.innerText = `Selected Brand: ${selectedBrand}\nSelected Model: ${selectedModel}\n\nDetails:\n${details}`;
              } else {
                  resultDiv.innerText = "Please select both brand and model.";
              }
          }
      
          // Populate brands on page load
          window.onload = function() {
              populateBrands();
          };
      