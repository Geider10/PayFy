//cliente_id: esta factura del usuario esta relacionada con un servicio
//invoice_id: Id unico de la factura
//Pueden existir facturas con el mismo cliente_Id pero con distinto invoice_id 
export const debts = [
  {
    "company": {
      "serviceId": "0001",
      "name": "Edenor"
    },
    "client_id": "11111111",
    "client_description": "Suministro de electricidad comercial",
    "due_date": "2025-10-20",
    "amount": 120000,
    "invoice_title": "Factura Edenor",
    "invoice_id": "INV-20240220-EDE001"
  },
  {
    "company": {
      "serviceId": "0002",
      "name": "Edesur"
    },
    "client_id": "AAAAAAAA",//cliente 2
    "client_description": "Suministro de electricidad comercial",
    "due_date": "2025-06-05",
    "amount": 9120.80,
    "invoice_title": "Factura Edesur",
    "invoice_id": "INV-20240305-EDE010"
  },
  {
    "company": {
      "serviceId": "0002",
       "name": "Edesur"
    },
    "client_id": "88888888", //cliente 1
    "client_description": "Suministro de electricidad comercial",
    "due_date": "2025-03-30",
    "amount": 20020.80,
    "invoice_title": "Factura Edesur",
    "invoice_id": "INV-20240305-EDE010"
  },
  {
    "company": {
      "serviceId": "0005",
      "name": "Movistar",
    },
    "client_id": "22222222",
    "client_description": "Servicio de internet hogar",
    "due_date": "2025-02-20",
    "amount": 4890.50,
    "invoice_title": "Factura Movistar",
    "invoice_id": "INV-20240220-MOV001"
  },
  {
    "company": {
      "serviceId": "0005",
      "name": "Movistar",
    },
    "client_id": "22222222",
    "client_description": "Servicio de internet hogar",
    "due_date": "2024-03-10",
    "amount": 20520.75,
    "invoice_title": "Factura Movistar",
    "invoice_id": "INV-20240310-PER002"
  },
  {
    "company": {
      "serviceId": "0007",
      "name": "Metrogas",
    },
    "client_id": "33333333",
    "client_description": "Consumo de gas domiciliario",
    "due_date": "2024-02-28",
    "amount": 4100.90,
    "invoice_title": "Factura Metrogas",
    "invoice_id": "INV-20240228-MET004"
  },
  {
    "company": {
      "serviceId": "0010",
      "name": "Aysa",
    },
    "client_id": "44444444",
    "client_description": "Servicio de agua potable",
    "due_date": "2024-04-01",
    "amount": 10900,
    "invoice_title": "Factura Aysa",
    "invoice_id": "INV-20240401-AYS006"
  },
  {
    "company": {
      "serviceId": "0010",
      "name": "Aysa",
    },
    "client_id": "BBBBBBBB",
    "client_description": "Servicio de agua potable",
    "due_date": "2024-04-01",
    "amount": 32250.60,
    "invoice_title": "Factura Aysa",
    "invoice_id": "INV-20240401-AYS006"
  },
  //falta una factura del cliente 2, serviceId 13
]
