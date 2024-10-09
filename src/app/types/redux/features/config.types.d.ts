interface configStates {
  religion: Array<any>;
  language: Array<any>;
  education: Array<any>;
  diet: Array<any>;
  music: Array<any>;
  industry: Array<any>;
  politics: Array<any>;
}
interface _configReducers {
  gettingReligion: Function;
  gettingLanguage: Function;
  gettingEducation: Function;
  gettingDiet: Function;
  gettingMusic: Function;
  gettingIndustry: Function;
  gettingPolitics: Function;
  gettingCategory: Function;
  gettingInterests: Function;
  clearAction: Function;
}
export type {configStates, _configReducers};
