import axios from 'axios';
import express from 'express'
import { evaluateRules } from './rules/checklistRules.js';
const app = express();
const port = 3000;

// Serve the static HTML page
app.use(express.static('public'));

// Endpoint to fetch checklist data and evaluate rules
app.get('/api/checklist', async (req, res) => {
  try {
    // Fetch data from the API
    const response = await axios.get('http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639');
    const applicationData = response.data;

    // Evaluate the checklist rules
    const result = evaluateRules(applicationData);
    res.json(result);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching checklist data');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
