import React, { useRef } from "react";

export const ReceiptSection = ({ receiptItems, onClearReceipt }) => {
  const total = receiptItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const printRef = useRef();

  const handlePrint = () => {
    const now = new Date();
    const timeString = now.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    const dateString = now.toLocaleDateString("en-US");

    const printWindow = window.open("", "PRINT", "width=300,height=600");

    printWindow.document.write(`
      <html>
        <head>
          <title>Receipt</title>
 <style>
  @page {
    size: 58mm auto;
    margin: 0;
  }

  @media print {
    body {
      margin: 0;
    }
  }

  body {
    font-family: monospace, Courier, monospace;
    font-size: 12px;
    margin: 0;
    padding: 5mm 3mm;
    width: 58mm;
    color: black;
    margin-inline : auto ;
  }

  h2, h3 {
    text-align: center;
    margin: 0 0 10px 0;
  }

  hr {
    border-top: 1px dashed black;
    margin: 8px 0;
  }

  .item-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
  }

  .total-row {
    font-weight: bold;
    border-top: 1px solid black;
    padding-top: 6px;
    margin-top: 6px;
  }
  .dotted-line {
    border-bottom: 2px dotted #999;
    margin: 20px 0;
  }
</style>

        </head>
        <body>
          <h2>Food Qabila Restaurant</h2>
          <h3>Zaman Town Korangi 3, Bengali Market</h3>
          <h3>Phone: +92 3103493529</h3>
          <div class="dotted-line"></div>
          ${receiptItems
            .map(
              (item) =>
                `<div class="item-row"><span>${item.name} x${
                  item.qty
                }</span><span>Rs${(item.price * item.qty).toFixed(
                  2
                )}</span></div>`
            )
            .join("")}
          <div class="total-row">
            <span>Total:</span>
            <span>Rs${total.toFixed(2)}</span>
          </div>
          <div class="dotted-line"> </div>
          <div style="text-align: center;"> 
            ${timeString} <br />
            ${dateString}
          </div>
          <p style="text-align:center;">Thank you for your purchase!</p>
  
          <script>
            window.onload = function() {
              const contentHeight = document.body.scrollHeight;
              window.resizeTo(300, contentHeight + 100);
              setTimeout(() => {
                window.print();
                window.close();
              }, 300);
            };
          </script>
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();
  };

  return (
    <div className="relative bg-[#fef1e6] text-black rounded-lg p-4 w-[90%] max-w-[320px] mx-auto shadow-md max-h-[80vh] overflow-y-auto">
      {onClearReceipt && (
        <button
          onClick={onClearReceipt}
          title="Clear Receipt"
          className="absolute top-2 right-2 text-red-600 text-3xl font-bold hover:scale-110 transition-transform"
        >
          ×
        </button>
      )}

      <h2 className="text-lg font-semibold mb-4 text-center">CASH RECEIPT</h2>
      {receiptItems.length === 0 ? (
        <p className="text-center text-gray-500">No items added.</p>
      ) : (
        <>
          {receiptItems.map((item, index) => (
            <div key={index} className="flex justify-between mb-1">
              <span>
                {item.name} x{item.qty}
              </span>
              <span>Rs {(item.price * item.qty).toFixed(2)}</span>
            </div>
          ))}
          <hr className="my-2" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>Rs{total.toFixed(2)}</span>
          </div>
          <button
            className="mt-4 bg-red-600 text-white w-full py-2 rounded flex items-center justify-center cursor-pointer"
            onClick={handlePrint}
          >
            🖨️ Print Receipt
          </button>
        </>
      )}
    </div>
  );
};
