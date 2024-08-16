import { I_props_Button } from './GuardTypes.d';
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
