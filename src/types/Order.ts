export interface Order {
  idenfication: {
    data_source: string;
    order_id: string;
  };
  transaction: {
    status: string;
    created_date: Date;
    updated_date: Date;
    value: number;
    discount_value: null | number;
    freight: null | number;
    freight_type: null | string;
    payment_type: string;
    payment_card_brand: string;
    payment_line: null;
    payment_bar_code: null | string;
    payment_url: null | string;
    billet_url: null | string;
    pix_qrcode: null | string;
    pix_emv: null;
    pix_ref: null;
    pix_expiration_date: null | Date;
    pix_creation_date: Date;
    pix_url: null | string;
    is_upsell: null;
  };
  product: {
    bundles: [
      {
        id: null | string;
        name: null | string;
        quantity: null | number;
        price: number;
        products: [
          {
            id: string;
            name: string;
            quantity: null | number;
            price: number;
          }
        ];
      }
    ];
  };
  producer: {
    name: string;
    document: null | string;
    email: null | string;
    tel: null | string;
  };
  customer: {
    id: string;
    name: string;
    email: string;
    telephone: string;
    document: null | string;
  };
  comission: {
    comissions_list: null;
    co_production_commission: null;
  };
  metadata: {
    affiliate_id: null;
    utm_source: null;
    utm_medium: null;
    utm_campaign: null;
  };
}
