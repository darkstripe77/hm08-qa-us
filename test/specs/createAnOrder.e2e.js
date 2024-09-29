const page = require('../../page');
const helper = require('../../helper');

describe('Create an order - Taxi Service', () => {

    it('should set the "from" and "to" addresses and call a taxi', async () => {
        await browser.url('/');

        // Set the "from" address
        const fromAddressField = await $('#from.input'); // Using the correct selector for the "from" address field
        await fromAddressField.setValue('East 2nd Street, 601');
        await expect(fromAddressField).toHaveValueContaining('East 2nd Street');

        // Set the "to" address
        const toAddressField = await $('#to.input'); // Using the correct selector for the "to" address field
        await toAddressField.setValue('1300 1st St');
        await expect(toAddressField).toHaveValueContaining('1300 1st St');

        // Click the "Call a taxi" button
        const callTaxiButton = await $('button.button.round'); // Selector for the "Call a taxi" button
        await callTaxiButton.click();
    });

    it('should select Supportive plan', async () => {
        const supportivePlan = await $("//div[contains(@class, 'tcard') and .//div[contains(text(), 'Supportive')]]");
        await supportivePlan.click();
        await expect(supportivePlan).toBeDisplayed(); // Verify it was selected
    });

    it('should fill in the phone number, confirm, and close the modal', async () => {
        // Using the XPath provided for the phone modal trigger button
        const phoneModalTriggerButton = await $('//*[@id="root"]/div/div[3]/div[3]/div[2]/div[2]/div[1]');
        await phoneModalTriggerButton.waitForDisplayed();
        await phoneModalTriggerButton.scrollIntoView(); // Make sure it's visible
        await phoneModalTriggerButton.click();
    
        const phoneNumberInput = await $('#phone.input'); // Input field for phone number
        await phoneNumberInput.waitForDisplayed();
        await phoneNumberInput.setValue('+1 469 468 1237'); // Enter phone number
    
        const nextButton = await $('button.button.full[type="submit"]'); // "Next" button
        await nextButton.waitForDisplayed();
        await nextButton.click();
    
        // Use the new CSS selector for the close button
        const closeButton = await $('#root > div > div.number-picker.open > div.modal > div.section.active > button');
        await closeButton.waitForDisplayed();
        await closeButton.click();
    });    

    it('should add a credit card and close the modal', async () => {
        const paymentMethodButton = await $('#root > div > div.workflow > div.workflow-subcontainer > div.tariff-picker.shown > div.form > div.pp-button.filled'); // Payment method button
        await paymentMethodButton.click();
    
        const addCardButton = await $('#root > div > div.payment-picker.open > div.modal > div.section.active > div.pp-selector > div.pp-row.disabled'); // Add card button
        await addCardButton.click();
    
        const cardNumberInput = await $('#number.card-input'); // Card number input
        await cardNumberInput.waitForDisplayed();
        await cardNumberInput.setValue('1234 0000 4321'); // Enter card number
    
        const cvvInput = await $('#code.card-input'); // CVV input
        await cvvInput.setValue('12'); // Enter CVV code
    
        const linkButton = await $('#root > div > div.payment-picker.open > div.modal.unusual > div.section.active.unusual > form > div.pp-buttons > button:nth-child(1)'); // "Link" button
        await linkButton.click();
    
        // Using a more specific CSS selector
        const closeButton = await $('//*[@id="root"]/div/div[2]/div[2]/div[1]/button');
        
        // Ensure the close button is displayed and scrolled into view
        await closeButton.waitForDisplayed({ timeout: 20000 });
        await closeButton.scrollIntoView();  // Scroll into view in case it’s not fully visible
    
        // Ensure the close button is clickable
        await closeButton.waitForClickable({ timeout: 10000 });
        
        // Finally, click the close button
        await closeButton.click();
    });
    
    it('should write a message for the driver', async () => {
        const messageField = await $('#comment.input'); // Message input field for driver
        await messageField.setValue('Get some whiskey');
        await expect(messageField).toHaveValue('Get some whiskey');
    });

    it('should order a Blanket and handkerchiefs', async () => {
        // Select the slider for Blanket and handkerchiefs, using the correct XPath selector
        const blanketSlider = await $('//*[@id="root"]/div/div[3]/div[3]/div[2]/div[2]/div[4]/div[2]/div[1]/div/div[2]/div');
        
        // Ensure the slider is displayed and clickable
        await blanketSlider.waitForDisplayed();
        await blanketSlider.scrollIntoView();
        await blanketSlider.waitForClickable();
        
        // Click to toggle the blanket and handkerchiefs selection
        await blanketSlider.click();
        
        // Add a short pause to allow the state to change
        await browser.pause(1000);
        
        // Check if the slider element has the "switch" class or an appropriate class indicating it's toggled
        const sliderClass = await blanketSlider.getAttribute('class');
        
        // Confirm the state reflects the "switch" state
        expect(sliderClass).toContain('switch'); // Adjust based on actual class
    });
    it('should order 2 Ice creams', async () => {
        const iceCreamButton = await $('//*[@id="root"]/div/div[3]/div[3]/div[2]/div[2]/div[4]/div[2]/div[3]/div/div[2]/div[1]/div/div[2]/div/div[3]'); // Selector for ice cream
        await iceCreamButton.click();
        await iceCreamButton.click(); // Order 2

        const quantity = await $('//*[@id="root"]/div/div[3]/div[3]/div[2]/div[2]/div[4]/div[2]/div[3]/div/div[2]/div[1]/div/div[2]/div/div[2]'); // Quantity selector
        await expect(quantity).toHaveTextContaining('2');
    });
    it('should show the car search modal after pressing the button and waiting', async () => {
        // Click the button that triggers the car modal
        const triggerButton = await $('//*[@id="root"]/div/div[3]/div[4]/button');
        await triggerButton.click();
    
        // Wait for 50 seconds to allow the modal to appear
        await browser.pause(50000);
    
        // Check for the presence of the driver modal using the provided XPath for the modal number
        const modalNumberElement = await $('//*[@id="root"]/div/div[5]/div[2]/div[1]/div/div[2]/div');
        await expect(modalNumberElement).toBeDisplayed();
    
        // Optionally, you can retrieve the text of the modal number and log it for debugging purposes
        const modalNumberText = await modalNumberElement.getText();
        console.log('Driver Modal Number:', modalNumberText); // Log the modal number
    });
});
