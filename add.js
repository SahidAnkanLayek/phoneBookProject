const indianDummyArray = [
  {
    name: "Amit Kumar",
    phoneNumber: "9876543210",
    address: "123 Street, Mumbai, Maharashtra",
    email: "amit.kumar@example.com",
  },
  {
    name: "Priya Singh",
    phoneNumber: "8765432109",
    address: "456 Street, Delhi, Delhi",
    email: "priya.singh@example.com",
  },
  {
    name: "Rahul Sharma",
    phoneNumber: "7654321098",
    address: "789 Street, Bangalore, Karnataka",
    email: "rahul.sharma@example.com",
  },
  {
    name: "Pooja Patel",
    phoneNumber: "6543210987",
    address: "101 Street, Ahmedabad, Gujarat",
    email: "pooja.patel@example.com",
  },
  {
    name: "Deepak Verma",
    phoneNumber: "5432109876",
    address: "202 Street, Chennai, Tamil Nadu",
    email: "deepak.verma@example.com",
  },
  {
    name: "Anjali Yadav",
    phoneNumber: "4321098765",
    address: "303 Street, Kolkata, West Bengal",
    email: "anjali.yadav@example.com",
  },
  {
    name: "Rajat Kapoor",
    phoneNumber: "8765432101",
    address: "404 Street, Hyderabad, Telangana",
    email: "rajat.kapoor@example.com",
  },
  {
    name: "Kavita Gupta",
    phoneNumber: "7654321092",
    address: "505 Street, Pune, Maharashtra",
    email: "kavita.gupta@example.com",
  },
  {
    name: "Suresh Nair",
    phoneNumber: "6543210983",
    address: "606 Street, Jaipur, Rajasthan",
    email: "suresh.nair@example.com",
  },
  {
    name: "Anita Reddy",
    phoneNumber: "5432109874",
    address: "707 Street, Lucknow, Uttar Pradesh",
    email: "anita.reddy@example.com",
  },
  {
    name: "Vikram Singh",
    phoneNumber: "9876543211",
    address: "808 Street, Chandigarh, Punjab",
    email: "vikram.singh@example.com",
  },
  {
    name: "Rashmi Tiwari",
    phoneNumber: "8765432102",
    address: "909 Street, Bhopal, Madhya Pradesh",
    email: "rashmi.tiwari@example.com",
  },
  {
    name: "Arjun Rajput",
    phoneNumber: "7654321093",
    address: "111 Street, Kochi, Kerala",
    email: "arjun.rajput@example.com",
  },
  {
    name: "Neha Sharma",
    phoneNumber: "6543210984",
    address: "222 Street, Dehradun, Uttarakhand",
    email: "neha.sharma@example.com",
  },
  {
    name: "Harish Verma",
    phoneNumber: "5432109875",
    address: "333 Street, Guwahati, Assam",
    email: "harish.verma@example.com",
  },
  {
    name: "Smita Kapoor",
    phoneNumber: "8765432103",
    address: "444 Street, Patna, Bihar",
    email: "smita.kapoor@example.com",
  },
  {
    name: "Prakash Patel",
    phoneNumber: "7654321094",
    address: "555 Street, Raipur, Chhattisgarh",
    email: "prakash.patel@example.com",
  },
  {
    name: "Aishwarya Nair",
    phoneNumber: "6543210985",
    address: "666 Street, Shimla, Himachal Pradesh",
    email: "aishwarya.nair@example.com",
  },
  {
    name: "Alok Yadav",
    phoneNumber: "5432109876",
    address: "777 Street, Jammu, Jammu and Kashmir",
    email: "alok.yadav@example.com",
  },
];

function callInfo() {
    let table = document.createElement("table");
    table.className = "tableTag";

    // Creating table header
    let thead = document.createElement("thead");
    thead.className = "tableHeaderTag";

    let headerRow = document.createElement("tr");
    headerRow.className = "Sub";

    // Creating table headers with different colors
    let headers = [
        { text: "Name", color: "black" },
        { text: "Phone-Number", color: "black"},
        { text: "Address", color:"black" },
        { text: "Email", color: "black" },
        { text: "Update", color: "black" },
    ];

    headers.forEach((header) => {
        let tableHead = document.createElement("th");
        tableHead.className = "tableHeadclass";
        tableHead.innerText = header.text;
        tableHead.style.backgroundColor = header.color;
        headerRow.appendChild(tableHead);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Creating table body
    let tbody = document.createElement("tbody");

    indianDummyArray.forEach((person) => {
        let row = document.createElement("tr");

        // Creating table data cells
        let nameCell = document.createElement("td");
        nameCell.innerText = person.name;
        nameCell.style.color = "white";
        nameCell.style.textAlign = "center";
        nameCell.style.verticalAlign = "middle";

        let phoneNumberCell = document.createElement("td");
        phoneNumberCell.innerText = person.phoneNumber;
        phoneNumberCell.style.color = "white";
        phoneNumberCell.style.textAlign = "center";
        phoneNumberCell.style.verticalAlign = "middle";

        let addressCell = document.createElement("td");
        addressCell.innerText = person.address;
        addressCell.style.color = "white";
        addressCell.style.textAlign = "center";
        addressCell.verticalAlign="middle";

        let emailCell = document.createElement("td");
        emailCell.innerText = person.email;
        emailCell.style.color = "white";
        emailCell.style.textAlign = "center";
        emailCell.style.verticalAlign="middle";

        let actionCell = document.createElement("td");
        actionCell.style.textAlign = "center";

        let btnEdit = document.createElement("button");
        btnEdit.className = "button";
        btnEdit.innerText = "Edit";
        btnEdit.style.textAlign="center";
        btnEdit.style.margin="auto";

        let btnDelete = document.createElement("button");
        btnDelete.className = "button";
        btnDelete.innerText = "Delete";
        btnDelete.style.textAlign="center";
        btnDelete.style.margin="auto";

        actionCell.appendChild(btnEdit);
        actionCell.appendChild(btnDelete);

        // Appending cells to the row
        row.appendChild(nameCell);
        row.appendChild(phoneNumberCell);
        row.appendChild(addressCell);
        row.appendChild(emailCell);
        row.appendChild(actionCell);
        tbody.appendChild(row);
    });

    // Inserting a row under the table where each table data contains an input box...
    let inputRow = document.createElement("tr");

    for (let i = 0; i < headers.length - 1; i++) {
    let inputCell = document.createElement("td");
    inputCell.style.textAlign = "center"; // Center the content horizontally in the cell

    let inputBox = document.createElement("input");
    inputBox.type = "text";
    inputBox.style.color = "white";
    inputBox.style.border = "2px solid cyan";
    inputBox.style.textAlign = "center"; // Center the text horizontally within the input box
    //inputBox.style.verticalAlign="center";
    inputBox.style.margin = "auto"; // Center the input box within the cell
    inputBox.placeholder = headers[i].text;

    inputCell.appendChild(inputBox);
    inputRow.appendChild(inputCell);
}

    // Adding a submit button under the action column
    let actionCell = document.createElement("td");
    actionCell.style.textAlign = "center";
    let submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit";
    submitButton.className = "button"; // Add the class for styling
    submitButton.style.color = "white"; // Set text color to white
    submitButton.style.border="2px solid cyan";
    submitButton.style.textAlign = "center";
    submitButton.style.margin="auto";

    actionCell.appendChild(submitButton);
    inputRow.appendChild(actionCell);

    // Append the input row to the tbody
    tbody.appendChild(inputRow);

    table.appendChild(tbody);

    // Appending the table inside the <"table-container"> div........
    document.getElementById("table-container").appendChild(table);

    // Remove the reference of the element having id "parent"
    document.getElementById("parent").remove();

    // FUNCTION OF THE SUBMMIT BUTTON --

    submitButton.addEventListener("click", () => {
      //     // Create a new row
           let insertedRow = document.createElement("tr");
      
      //     // Loop through each input element in the inputRow
          for (let i = 0; i < headers.length - 1; i++) {
            let val = inputRow.cells[i].firstElementChild.value;
            let val2 = inputRow.cells[i].s
            // let val = inputBox.value;
      
            // Create a new cell for the new row
            let newCell = document.createElement("td");
            newCell.innerText = val;
            newCell.style.textAlign = "center"; // Center the content horizontally in the cell
            newCell.style.verticalAlign = "middle"; // Center the content vertically in the cell
            newCell.style.color = "white";
            // Append the cell to the new row
            insertedRow.appendChild(newCell);
          }
      
          // Create "Edit" and "Delete" buttons
          let editButton = document.createElement("button");
          editButton.innerText = "Edit";
          editButton.className = "button";
          
      
          let deleteButton = document.createElement("button");
          deleteButton.innerText = "Delete";
          deleteButton.className = "button";
          
      
          // Create a cell for buttons and append buttons to it
          let actionCell = document.createElement("td");
          actionCell.style.textAlign = "center";
          actionCell.appendChild(editButton);
          actionCell.appendChild(deleteButton);
      
          // Append the action cell to the new row
          insertedRow.appendChild(actionCell);
      
          // Insert the new row before the last row
          let tbody = table.querySelector("tbody");
          tbody.insertBefore(insertedRow, tbody.lastElementChild);
      
          // Clear the input values after adding the row
          for (let i = 0; i < headers.length - 1; i++) {
            inputRow.cells[i].querySelector("input").value = "";
          }
         });

}
//==============================================================================================


let btn = document.querySelector(".button");
