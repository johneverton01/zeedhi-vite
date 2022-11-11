import Vue from 'vue';
import Zeedhi from '@zeedhi/vue';
import ZeedhiComponents from '@zeedhi/vuetify';
import { Icons } from '@zeedhi/common';
import { Messages, I18n } from '@zeedhi/core';
import { Locale } from '../utils/Locale';
import router from '../router';
import controllers from '../controllers';
import config from '../config';
import '@zeedhi/common/dist/style.css';
import '@zeedhi/vuetify/dist/zd-style.css';
import vuetify from './vuetify';

Icons.addIcons({
  iconName: 'mdi-icon-id',
});

Vue.use(Zeedhi, {
  controllers,
  router,
  config,
});
Vue.use(ZeedhiComponents);

vuetify.framework.icons.values = Icons.getIcons() as any;

Messages.add({
  "pt-BR": {
    translation: {
      KEY: "valor",
    },
  },
  "es-CL": {
    translation: {
      KEY: "valor",
    },
  },
  "es-CO": {
    translation: {
      KEY: "valor",
    },
  },
  "es-ES": {
    translation: {
      KEY: "valor",
    },
  },
  "en-US": {
    translation: {
      KEY: "value",
    },
  },
})

const savedLanguage = localStorage.getItem('LANGUAGE');
if (savedLanguage) I18n.changeLanguage(savedLanguage);
Locale.changeDayjsLocale(I18n.instance.language);
