
export interface Colors {
	[key: string]: string;
}

export interface Prefix {
  level: function;
  template: string;
}

export interface Options {
  id?: string;
	level?: LogLevel;
  name?: string;
  preface?: string;
  prefix?: Prefix;
	timestamp?: boolean;
}
