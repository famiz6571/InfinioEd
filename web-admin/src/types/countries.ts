export interface CountryData {
  label: string;
  value: string;
  meta: CountryMeta;
}

export interface CountryMeta {
  code: string;
  abbreviation: string;
  timezone_id?: string;
  phoneCode?: string;
}

export interface DropdownOption {
  label: string;
  value: string;
  name?: string;
  meta?: CountryMeta;
}
