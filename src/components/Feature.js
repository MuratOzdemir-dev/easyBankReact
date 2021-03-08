import React from "react";
import FeatureCard from "./FeatureCard";




export default function Feature() {
  return (
    <div className="feature">
      <div className="feature__head">
        <h2>Why choose Easybank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="feature__container">
        <FeatureCard 
          icon="./images/icon-online.svg"
          title="Online Banking"
          text="Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world."
        />
        <FeatureCard 
          icon="./images/icon-budgeting.svg"
          title="Simple Budgeting"
          text="See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits."
        />
        <FeatureCard 
          icon="./images/icon-onboarding.svg"
          title="Fast Onboarding"
          text="We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away."
        />
        <FeatureCard 
          icon="./images/icon-api.svg"
          title="Open API"
          text="Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier."
        />
      </div>
    </div>
  );
}
