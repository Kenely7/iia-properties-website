export type PropertyStatus = "for-sale" | "for-rent";

export interface Agent {
  name: string;
  phone: string;
  email: string;
  photo: string;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  status: PropertyStatus;
  price: number;
  address: string;
  city: string;
  state: string;
  zip: string;
  propertyType: string;
  beds: number;
  baths: number;
  sqft: number;
  lotSize: string;
  yearBuilt: number;
  amenities: string[];
  images: string[];
  agent: Agent;
  featured: boolean;
  dateAdded: string;
}

export type NewProperty = Omit<Property, "id" | "dateAdded">;
