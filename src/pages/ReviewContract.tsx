import React from'react';

interface ContractDetailsProps {
  className?: string;
}

export default function ContractDetails({ className = '' }: ContractDetailsProps) {
  return (
    <div className={`${className} contract-details-rectangle`}>
      <div className="contract-details-content">
        <ContractInfo />
        <ContractTerms />
      </div>
      <div className="contract-details-tt-contract">
        <div className="contract-details-t-contract">
          <section className="contract-details-contract-1">Contract</section>
        </div>
      </div>
    </div>
  );
}

function ContractInfo() {
  return (
    <div>
      <p>Customer Name: John Doe</p>
      <p>Email: john.doe@example.com</p>
      <p>Phone Number: 123-456-7890</p>
      <p>Address: 123 Main Street, New York, NY, USA</p>
      <div className="contract-details-spacer" />
      <p>Service Type: Bodyguard Rental</p>
      <p>Date and Time Requested: August 15, 2024, 08:00 AM</p>
      <p>Special Requirements: 24/7 Protection, No Uniform</p>
      <div className="contract-details-spacer" />
      <p>Service Cost: $10,000</p>
      <p>Payment Method: Bank Transfer</p>
      <div className="contract-details-spacer" />
      <p>Status: Confirmed</p>
    </div>
  );
}

function ContractTerms() {
  return (
    <div>
      <p>Contract Terms:</p>
      <p>1. Term 1: The service will be provided by a team of professional, trained, and experienced bodyguards.</p>
      <p>2. Term 2: The customer is responsible for providing accurate and complete information about potential threats.</p>
      <p>3. Term 3: The service will include personal and property protection throughout the rental period.</p>
    </div>
  );
}