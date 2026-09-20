import mirrorTemplates from './mirrorTemplates.js';
import isoLinks from './isoLinks.js';

function generateLastSyncTime(syncTimeout = false) {
  const now = new Date();
  const randomMinutes = Math.floor(Math.random() * 30);
  const randomSeconds = Math.floor(Math.random() * 60);
  now.setMinutes(now.getMinutes() - randomMinutes);
  now.setSeconds(randomSeconds);

  let timestamp = Math.floor(now.getTime() / 1000);

  if (syncTimeout) {
    timestamp -= 24 * 60 * 60;
  }

  return timestamp;
}

export function generateMockMirrorsData() {
  return mirrorTemplates.map((template) => {
    return {
      name: template.name,
      url: template.url,
      help_url: template.help_url,
      size: template.size,
      last_timestamp: generateLastSyncTime(template.sync_timeout),
      status: template.status,
      is_limited_image: 0,
      sync_method: template.sync_method,
      display_name: template.display_name,
      description: template.description
    };
  });
}

export function generateMockIsoLinks() {
  return isoLinks;
}

export function getMirrorsList() {
  return generateMockMirrorsData();
}
