export interface I_props_HeaderInPageHome {
  title: string;
  subtitle: string;
  page: string;
}
export interface I_props_Achievements {
  clientsProtected: number;
  yearsOfExperience: number;
  officeLocations: number;
  statesServed: number;
}
export interface I_props_Testimonial {
  name: string;
  position: string;
  image: string;
  feedback: string;
}

export type I_props_FormInput = {
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export type I_props_SelectInput = {
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};
export type I_props_Button = {
  label: string;
  onClick: () => void;
};
export interface I_props_ServiceCard {
  image: string;
  title: string;
  description: string;
  note: string;
  priceRange: string;
  groupSize: string;
  vipBadge?: boolean;
}
export interface I_props_Avatar {
  size?: number;
  border?: string;
}
export interface I_props_EditableButton {
  initialText: string;
  label: string;
  type: string;
}
export interface I_props_SelectInputName {
  initialText: string;
  label: string;
  options: string[];
}
export interface I_props_Contract {
  no: number;
  contractCode: string;
  typeOfService: string;
  specialRequirements: string;
  price: string;
  startDate: string;
  endDate: string;
  status: string;
  view: string;
  feedback: string;
}

export interface I_props_ContractTable {
  contracts: I_props_Contract[];
}
export interface I_props_ButtonBlue {
  buttonText: string;
  className?: string;
  onClick?: () => void;
}
export interface I_props_ButtonBlack {
  buttonText: string;
  className?: string;
  onClick?: () => void;
}
