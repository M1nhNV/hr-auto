interface SuitProps {
  uuid: string;
  title: string;
  status: string;
  type:  string;
  script: string;
  state: string;
  duration: number
  file: string;
  failures: [];
  passes: [];
  tests: [];
  pending: [];
  suites: [];
  skipped: [];
}

interface ItemProps {
  uuid: string;
  title: string;
  state: string;
  duration: number
  skipped: boolean;
}

export {
  SuitProps,
  ItemProps,
}