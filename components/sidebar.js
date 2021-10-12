import React, { Component } from "react";
import FeatureLinks from "./FeatureLinks";

class Sidebar extends Component {
  render() {
    return (
      <div>
        <ul className="mb-5 mt-4">
            <FeatureLinks link="Items"/>
            <FeatureLinks link="Customers"/>
            <FeatureLinks link="Suppliers"/>
            <FeatureLinks link="Sales Order"/>
            <FeatureLinks link="Invoices"/>
            <FeatureLinks link="Bill"/>
        </ul>

        <ul className="mb-3">
            <FeatureLinks link="Items"/>
            <FeatureLinks link="Customers"/>
            <FeatureLinks link="Suppliers"/>
            <FeatureLinks link="Sales Order"/>
            <FeatureLinks link="Invoices"/>
            <FeatureLinks link="Bill"/>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
