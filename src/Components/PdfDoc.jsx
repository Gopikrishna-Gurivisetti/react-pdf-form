import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { styles } from "./Styles";
import { PDFViewer } from "@react-pdf/renderer";

const PdfDoc = () => {
  // Create Document Component
  const MyDocument = (employee) => (
    <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.heading}>Student Details</Text>
  
      <View style={styles.section}>
        <Text>Employee Name: {employee.name}</Text>
        <Text>Employee ID: {employee.id}</Text>
        <Text>Month: {employee.month}</Text>
      </View>
  
      {/* Table */}
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableColHeader}>Earnings</Text>
          <Text style={styles.tableColHeader}>Amount</Text>
          <Text style={styles.tableColHeader}>Deductions</Text>
          <Text style={styles.tableColHeader}>Amount</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCol}>Basic Salary</Text>
          <Text style={styles.tableCol}>${employee.basic}</Text>
          <Text style={styles.tableCol}>Tax</Text>
          <Text style={styles.tableCol}>${employee.tax}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCol}>HRA</Text>
          <Text style={styles.tableCol}>${employee.hra}</Text>
          <Text style={styles.tableCol}>Provident Fund</Text>
          <Text style={styles.tableCol}>${employee.pf}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCol}>Other Allowances</Text>
          <Text style={styles.tableCol}>${employee.allowances}</Text>
          <Text style={styles.tableCol}></Text>
          <Text style={styles.tableCol}></Text>
        </View>
      </View>
  
      <Text>Total Earnings: ${employee.basic + employee.hra + employee.allowances}</Text>
      <Text>Total Deductions: ${employee.tax + employee.pf}</Text>
      <Text>Net Pay: ${employee.basic + employee.hra + employee.allowances - (employee.tax + employee.pf)}</Text>
    </Page>
  </Document>
    );
    const employeeData = {
      name: "John Doe",
      id: "EMP12345",
      month: "April 2025",
      basic: 5000,
      hra: 1500,
      allowances: 700,
      tax: 800,
      pf: 300,
    };
    return (
      <>
        <PDFViewer style={{ width: "100%", height: "100vh" }}>
        <MyDocument employee={employeeData} />
      </PDFViewer>
      </>
    );
  }

export default PdfDoc;
