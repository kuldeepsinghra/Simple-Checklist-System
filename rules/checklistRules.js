// Define the checklist rules and conditions
export const checklistRules = [
    {
      name: 'Valuation Fee Paid',
      condition: (data) => data.isValuationFeePaid === true,
    },
    {
      name: 'UK Resident',
      condition: (data) => data.isUkResident === true,
    },
    {
      name: 'Risk Rating Medium',
      condition: (data) => data.riskRating === 'Medium',
    },
    {
      name: 'LTV Below 60%',
      condition: (data) => {
        // Parse and calculate LTV (Loan-to-Value ratio)
        const loanRequired = parseFloat(data.mortgage.loanRequired.replace('£', '').replace(',', ''));
        const purchasePrice = parseFloat(data.mortgage.purchasePrice.replace('£', '').replace(',', ''));
        const ltv = (loanRequired / purchasePrice) * 100;
        return ltv < 60;
      },
    },
  ];
  
  // Function to evaluate the rules and check the condition; if true, return "Passed", else "Failed"
  export function evaluateRules(applicationData) {
    return checklistRules.map((rule) => {
      return {
        rule: rule.name,
        status: rule.condition(applicationData) ? 'Passed' : 'Failed',
      };
    });
  }
  