import {baseURL, moduleName} from '../../controllers/api/globalEndpoint.api';

const eventEndPoint = {
  list: baseURL + moduleName.event + '/list',
  details: baseURL + moduleName.event + '/details/',
  create: baseURL + moduleName.event + '/create',
  update: baseURL + moduleName.event + '/update',
  myEvents: baseURL + moduleName.event + '/my-events',
  discoverEvent: baseURL + moduleName.event + '/discover-events',
  eventJoin: baseURL + moduleName.event + '/join/',
  joinedEvents: baseURL + moduleName.event + '/joined-events',
  participantApprove: baseURL + moduleName.event + '/participant/status/update',
  participantList: baseURL + moduleName.event + '/participant/',
};

export default eventEndPoint;
