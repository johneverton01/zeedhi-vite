import './zeedhi';
import { VersionService } from '@zeedhi/core';
import vuetify from './vuetify';

import packageContent from '../../package.json';

VersionService.addAppVersion(packageContent.name, packageContent.version);

export {
  vuetify,
};
