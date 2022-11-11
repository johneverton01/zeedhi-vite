import { dayjs } from '@zeedhi/core';

export class Locale {
  public static changeDayjsLocale(lacale: string) {
    if (lacale === 'pt-BR') dayjs.locale('pt-br');
    else if (lacale === 'es-ES') dayjs.locale('es');
    else dayjs.locale('en');
  }
}
