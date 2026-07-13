import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { format } from 'date-fns';

export interface InvoiceDetails {
  name: string;
  email: string;
  mobile: string;
  role: string;
  orderId: string;
  amount: number;
  date: Date;
}

export function generateInvoice(details: InvoiceDetails) {
  const doc = new jsPDF();
  
  // Brand Color (Matches primary color)
  const primaryColor: [number, number, number] = [37, 99, 235]; // blue-600
  
  // --- Header ---
  doc.setFillColor(...primaryColor);
  doc.rect(0, 0, 210, 40, 'F'); // Fill top banner
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text('NirmataAI Tech Solutions', 14, 25);
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Internship Application Fee Receipt', 14, 32);
  
  // --- Invoice Metadata ---
  doc.setTextColor(50, 50, 50);
  doc.setFontSize(10);
  
  doc.setFont('helvetica', 'bold');
  doc.text('Receipt No:', 140, 50);
  doc.setFont('helvetica', 'normal');
  doc.text(details.orderId, 140, 55);
  
  doc.setFont('helvetica', 'bold');
  doc.text('Date:', 140, 65);
  doc.setFont('helvetica', 'normal');
  doc.text(format(details.date, 'PPP'), 140, 70);
  
  // --- Billed To ---
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Billed To:', 14, 50);
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(`Name: ${details.name}`, 14, 58);
  doc.text(`Email: ${details.email}`, 14, 64);
  doc.text(`Mobile: ${details.mobile || 'N/A'}`, 14, 70);
  doc.text(`Role: ${details.role}`, 14, 76);
  
  // --- Table ---
  autoTable(doc, {
    startY: 90,
    head: [['Description', 'Quantity', 'Amount (INR)']],
    body: [
      [`Internship Application Fee - ${details.role}`, '1', `Rs. ${details.amount.toFixed(2)}`]
    ],
    headStyles: {
      fillColor: primaryColor,
      textColor: [255, 255, 255],
      fontStyle: 'bold',
      halign: 'left'
    },
    columnStyles: {
      0: { cellWidth: 100 },
      1: { halign: 'center' },
      2: { halign: 'right' }
    },
    styles: {
      fontSize: 10,
      cellPadding: 6,
    },
    theme: 'striped'
  });
  
  // --- Total ---
  const finalY = (doc as any).lastAutoTable.finalY || 120;
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Total Amount:', 130, finalY + 15);
  doc.text(`Rs. ${details.amount.toFixed(2)}`, 183, finalY + 15, { align: 'right' });
  
  // --- Footer ---
  doc.setFontSize(9);
  doc.setFont('helvetica', 'italic');
  doc.setTextColor(120, 120, 120);
  doc.text('This is a computer-generated receipt and does not require a signature.', 14, 280);
  doc.text('Thank you for applying to NirmataAI Tech Solutions.', 14, 285);
  
  // --- Return Base64 ---
  // Returns base64 encoded PDF string without the data URI prefix
  const dataUri = doc.output('datauristring');
  return dataUri.split(',')[1];
}
