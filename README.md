**Checklist System**
A simple Node.js application that fetches data from an external API, evaluates a set of predefined rules, and displays the results in a dashboard.

**Features**
Fetches application data from the provided API endpoint.
Evaluates multiple conditions based on the data (valuation fee paid, UK residency, risk rating, and loan-to-value ratio).
Displays a simple dashboard with the status of each rule (Passed/Failed).
Easily extendable to add more rules in the future.
**Requirements**
Node.js (v14 or later)
NPM (Node Package Manager)
Setup and Installation
**Follow these steps to get the application running on your local machine.**

1. Clone the Repository
Clone this repository to your local machine.

bash
Copy code
git clone https://github.com/kuldeepsinghra/checklist-system.git
cd checklist-system
2. Install Dependencies
Run the following command to install the necessary Node.js packages (express and axios).

bash
Copy code
npm install
3. Run the Application
Once the dependencies are installed, you can start the server with the following command:

bash
Copy code
**node server.js**
This will start the server on http://localhost:3000.

4. Open the Dashboard
Once the server is running, open your browser and visit:

arduino
Copy code
http://localhost:3000
You will see a simple dashboard displaying the results of the checklist evaluation. Each rule will either show as "Passed" or "Failed" based on the data fetched from the API.

