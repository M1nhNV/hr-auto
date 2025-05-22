const convertColorState = (state: string) => {
  if (state === 'failed') {
    return 'red';
  }

  if (state === 'passed') {
    return 'green';
  }

  if (state === 'pending') {
    return 'yellow';
  }

  return 'default';
}

type Locale = 'vi' | 'en';

interface TimeUnit {
  value: number;
  vi: string;
  en: string;
}

const convertTime = (ms: number, locale: Locale = 'en'): string => {
  if (typeof ms !== 'number' || ms < 0) {
    throw new Error('seconds must be a non-negative number');
  }

  const seconds = ms / 1000;

  const units: TimeUnit[] = [
    { value: 86400, vi: 'ngày',  en: 'd' },
    { value: 3600,  vi: 'giờ',   en: 'h' },
    { value: 60,    vi: 'phút',  en: 'm' },
    { value: 1,     vi: 'giây',  en: 's' },
  ];

  const unit = units.find(u => seconds >= u.value) ?? units[units.length - 1];

  const amount = seconds / unit.value;
  const formatted = Number.isInteger(amount) ? amount : parseFloat(amount.toFixed(2));
  const label = locale === 'en' ? `${unit.en}` : unit.vi;

  return `${formatted}${label}`;
}

const ellipsisText = (text: string, length: number = 20) => {
  if (text.length > length) {
    return `${text.substr(0, length)}...`;
  }

  return text;
}

export {
  convertColorState,
  convertTime,
  ellipsisText
}