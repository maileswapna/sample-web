//console.log('Web app loaded!');
// External web app: JavaScript to listen to Canvas events from Salesforce

// Listen for a custom event from Salesforce
window.addEventListener('message', function(event) {
    if (event.origin === 'https://platform.salesforce.com') {
        const data = event.data;
        if (data.type === 'customEvent') {
            console.log('Received event from Salesforce:', data.payload);
        }
    }
});

// Example of sending an event back to Salesforce
function sendToSalesforce() {
    window.parent.postMessage({
        type: 'customEvent',
        payload: { key: 'value' }
    }, 'https://platform.salesforce.com');
}

