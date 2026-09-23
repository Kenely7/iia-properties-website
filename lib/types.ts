export type PropertyStatus =
  | "for-sale"
  | "for-rent"
  | "joint-venture"
  | "private-treaty"
  | "sold"
  | "rented";

export interface Property {
  id: string;
  title: string;
  description: string;
  status: PropertyStatus;
  price: number;
  address: string;
  city: string;
  state: string;
  propertyType: string;
  beds: number;
  baths: number;
  amenities: string[];
  images: string[];
  featured: boolean;
  published: boolean;
  dateAdded: string;
}

export type NewProperty = Omit<Property, "id" | "dateAdded" | "published">;
