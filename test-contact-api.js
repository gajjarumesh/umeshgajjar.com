#!/usr/bin/env node

/**
 * Test script for Contact Form Email API
 * 
 * Usage:
 *   node test-contact-api.js
 * 
 * This script tests the contact form API endpoint without SMTP configuration
 * to verify the endpoint is working correctly.
 */

const testContactAPI = async () => {
  console.log('🧪 Testing Contact Form API...\n');

  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '+1 (555) 123-4567',
    projectType: 'Web Application',
    budgetRange: '$5,000 - $10,000',
    message: 'This is a test message from the API test script. Testing SMTP email functionality.',
  };

  try {
    console.log('📤 Sending test contact form submission...');
    console.log('Test data:', JSON.stringify(testData, null, 2), '\n');

    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    const result = await response.json();

    console.log('📬 Response Status:', response.status);
    console.log('📬 Response Body:', JSON.stringify(result, null, 2), '\n');

    if (response.ok) {
      console.log('✅ SUCCESS: Contact form API is working!');
      
      if (result.warning) {
        console.log('\n⚠️  WARNING:', result.warning);
        console.log('💡 To enable email sending, configure SMTP in .env.local');
        console.log('📖 See SMTP_SETUP.md for configuration instructions');
      } else {
        console.log('📧 Email should have been sent to configured SMTP address');
      }
    } else {
      console.log('❌ FAILED: API returned an error');
      console.log('Error:', result.error);
      if (result.details) {
        console.log('Details:', result.details);
      }
    }
  } catch (error) {
    console.log('❌ FAILED: Error connecting to API');
    console.log('Error:', error.message);
    console.log('\n💡 Make sure the development server is running:');
    console.log('   npm run dev');
  }
};

// Run tests
testContactAPI();
