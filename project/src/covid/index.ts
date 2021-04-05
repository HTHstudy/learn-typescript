interface Global {
  Date: '2021-04-05T00:31:36.018Z';
  NewConfirmed: 531492;
  NewDeaths: 8418;
  NewRecovered: 364360;
  TotalConfirmed: 130596964;
  TotalDeaths: 2843959;
  TotalRecovered: 74112622;
}

export interface Country {
  Country: string;
  CountryCode: string;
  Date: string;
  ID: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  Premium: any;
  Slug: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

export interface CovidSummaryResponse {
  Countries: Country[];
  Date: string;
  Global: Global;
  Message: string;
}

export interface CountrySummaryInfo {
  Cases: number;
  City: string;
  CityCode: string;
  Country: string;
  CountryCode: string;
  Date: string;
  Lat: string;
  Lon: string;
  Province: string;
  Status: string;
}
// 반환 값이 객체 형태가 아니라 배열이라 type으로 정의한다.
export type CountrySummaryResponse = CountrySummaryInfo[];
