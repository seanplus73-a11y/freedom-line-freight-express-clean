interface ShipmentData {
  ShipmentCode: string;
  CustomerName: string;
  Email?: string;
  Phone?: string;
  VehicleYear?: string;
  VehicleMake?: string;
  VehicleModel?: string;
  VIN?: string;
  PickupCity?: string;
  PickupLocation?: string;
  PickupDate?: string;
  DeliveryCity?: string;
  DeliveryLocation?: string;
  DeliveryDate?: string;
  FinalPrice?: number;
  DepositPaid?: number;
  FinalPaymentPaid?: number;
  BalanceDue?: number;
  PaymentStatus?: string;
}

interface InvoiceDocumentProps {
  shipment: ShipmentData;
}

export function InvoiceDocument({ shipment }: InvoiceDocumentProps) {
  const balanceDue = shipment.BalanceDue || 0;
  const hasBalance = balanceDue > 0;
  const invoiceType = hasBalance ? 'BALANCE DUE INVOICE' : 'PAYMENT RECEIPT';
  
  const depositPaid = shipment.DepositPaid || 0;
  const finalPaymentPaid = shipment.FinalPaymentPaid || 0;
  const totalPrice = shipment.FinalPrice || 0;

  return (
    <div className="bg-white max-w-4xl mx-auto" style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <div className="border-b-4 border-blue-700 pb-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          Freedom Line Freight Express LLC
        </h1>
        <p className="text-sm text-gray-600 mb-2">Vehicle Transport Services</p>
        <p className="text-xs text-gray-700">
          dispatch@flfreightco.com | (480) 919-8088 | www.flfreightco.com
        </p>
      </div>

      {/* Invoice Title & Details */}
      <div className="flex justify-between items-start mb-6">
        <div className="bg-blue-700 text-white px-6 py-3 rounded-lg inline-block">
          <h2 className="text-xl font-bold">{invoiceType}</h2>
        </div>
        <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 min-w-[250px]">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Invoice #:</span>
              <span className="font-bold">{shipment.ShipmentCode || 'N/A'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipment:</span>
              <span className="font-bold text-blue-700">{shipment.ShipmentCode || 'N/A'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date:</span>
              <span className="font-bold">{new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Information */}
      <div className="mb-6">
        <div className="bg-blue-700 text-white px-3 py-2 rounded-t-lg">
          <h3 className="font-bold text-sm">CUSTOMER INFORMATION</h3>
        </div>
        <div className="border-2 border-blue-700 rounded-b-lg p-6">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-xs font-bold text-gray-600 mb-1">CUSTOMER NAME</p>
              <p className="font-bold text-gray-900 text-lg mb-4">{shipment.CustomerName}</p>
              <p className="text-xs font-bold text-gray-600 mb-1">EMAIL ADDRESS</p>
              <p className="text-gray-900">{shipment.Email || 'N/A'}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-600 mb-1">PAYMENT STATUS</p>
              <p className="font-bold text-gray-900 text-lg mb-4">{shipment.PaymentStatus || 'Pending'}</p>
              <p className="text-xs font-bold text-gray-600 mb-1">PHONE NUMBER</p>
              <p className="text-gray-900">{shipment.Phone || 'N/A'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Shipment Details */}
      <div className="mb-6">
        <div className="bg-blue-700 text-white px-3 py-2 rounded-t-lg">
          <h3 className="font-bold text-sm">SHIPMENT DETAILS</h3>
        </div>
        <div className="border-2 border-blue-700 rounded-b-lg p-6">
          <div className="mb-6">
            <p className="text-xs font-bold text-gray-600 mb-1">VEHICLE INFORMATION</p>
            <p className="font-bold text-gray-900 text-base mb-1">
              {shipment.VehicleYear} {shipment.VehicleMake} {shipment.VehicleModel}
            </p>
            {shipment.VIN && (
              <p className="text-sm text-gray-700">VIN: {shipment.VIN}</p>
            )}
          </div>

          <div className="border-t border-gray-300 pt-6">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-xs font-bold text-gray-600 mb-1">PICKUP LOCATION</p>
                <p className="font-bold text-gray-900 mb-1">
                  {shipment.PickupLocation || shipment.PickupCity || 'N/A'}
                </p>
                {shipment.PickupDate && (
                  <p className="text-sm text-gray-700">Date: {shipment.PickupDate}</p>
                )}
              </div>
              <div>
                <p className="text-xs font-bold text-gray-600 mb-1">DELIVERY LOCATION</p>
                <p className="font-bold text-gray-900 mb-1">
                  {shipment.DeliveryLocation || shipment.DeliveryCity || 'N/A'}
                </p>
                {shipment.DeliveryDate && (
                  <p className="text-sm text-gray-700">Date: {shipment.DeliveryDate}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Summary */}
      <div className="mb-6">
        <div className="bg-blue-700 text-white px-3 py-2 rounded-t-lg">
          <h3 className="font-bold text-sm">PAYMENT SUMMARY</h3>
        </div>
        <div className="border-2 border-blue-700 rounded-b-lg overflow-hidden">
          <div className="bg-gray-50 border-b-2 border-blue-700 px-6 py-3 flex justify-between items-center">
            <span className="text-gray-700">Total Transport Price</span>
            <span className="font-bold text-gray-900 text-lg">${totalPrice.toFixed(2)}</span>
          </div>

          {depositPaid > 0 && (
            <div className="bg-white border-b-2 border-blue-700 px-6 py-3 flex justify-between items-center">
              <span className="text-gray-700">Deposit Received</span>
              <span className="font-bold text-green-700">- ${depositPaid.toFixed(2)}</span>
            </div>
          )}

          {finalPaymentPaid > 0 && (
            <div className="bg-white border-b-2 border-blue-700 px-6 py-3 flex justify-between items-center">
              <span className="text-gray-700">Final Payment Received</span>
              <span className="font-bold text-green-700">- ${finalPaymentPaid.toFixed(2)}</span>
            </div>
          )}

          <div className="bg-blue-100 px-6 py-4 flex justify-between items-center">
            <span className="font-bold text-gray-900 text-base">
              {hasBalance ? 'BALANCE DUE' : 'TOTAL PAID'}
            </span>
            <span className={`font-bold text-xl ${hasBalance ? 'text-red-700' : 'text-green-700'}`}>
              ${hasBalance ? balanceDue.toFixed(2) : totalPrice.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* Transport Requirements */}
      <div className="mb-6">
        <div className="bg-gray-700 text-white px-3 py-2 rounded-t-lg">
          <h3 className="font-bold text-sm">IMPORTANT TRANSPORT REQUIREMENTS</h3>
        </div>
        <div className="border-2 border-gray-700 rounded-b-lg bg-gray-50 p-4">
          <ul className="space-y-2 text-sm text-gray-900">
            <li>• Customer must remove personal belongings before transport.</li>
            <li>• Vehicle must have less than 1/4 tank of fuel.</li>
            <li>• Customer will receive pickup confirmation 24 hours before arrival.</li>
          </ul>
        </div>
      </div>

      {/* Payment Methods - Only show if balance due */}
      {hasBalance && (
        <div className="mb-6">
          <div className="bg-blue-700 text-white px-3 py-2 rounded-t-lg">
            <h3 className="font-bold text-sm">PAYMENT METHODS</h3>
          </div>
          <div className="border-2 border-blue-700 rounded-b-lg p-6 bg-white">
            <p className="font-bold text-gray-900 mb-4">
              Please submit payment using one of the following methods:
            </p>
            
            <div className="space-y-4">
              <div>
                <p className="font-bold text-gray-900 mb-1">Pay with Credit/Debit Card (Stripe)</p>
                <a 
                  href="https://book.stripe.com/bJe7sE9B8cr41Gc29ScfK00" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 text-sm underline hover:text-blue-800"
                >
                  https://book.stripe.com/bJe7sE9B8cr41Gc29ScfK00
                </a>
              </div>

              <div>
                <p className="font-bold text-gray-900 mb-1">Pay with PayPal</p>
                <a 
                  href="https://www.paypal.com/ncp/payment/BMNZCXNFAF2FG" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 text-sm underline hover:text-blue-800"
                >
                  https://www.paypal.com/ncp/payment/BMNZCXNFAF2FG
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="text-center border-t pt-6 mt-8">
        <p className="font-bold text-gray-900 mb-1">
          Thank you for choosing Freedom Line Freight Express!
        </p>
        <p className="text-sm text-gray-700">
          For questions, contact dispatch@flfreightco.com
        </p>
      </div>
    </div>
  );
}
